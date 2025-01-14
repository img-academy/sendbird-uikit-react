import React, {
  ReactElement,
  useContext,
  useState,
  useEffect,
} from 'react';

import Label, { LabelTypography, LabelColors } from '../../../../ui/Label';
import Icon, { IconTypes } from '../../../../ui/Icon';

import { UserListItem } from './ParticipantItem';
import { LocalizationContext } from '../../../../lib/LocalizationContext';
import { useOpenChannelSettings } from '../../context/OpenChannelSettingsProvider';
import useSendbirdStateContext from '../../../../hooks/useSendbirdStateContext';

export default function ParticipantsList(): ReactElement {
  const globalState = useSendbirdStateContext();
  const currentUser = globalState?.config?.userId;
  const { channel, onCloseClick } = useOpenChannelSettings();
  const { stringSet } = useContext(LocalizationContext);
  const [participants, setParticipants] = useState<Array<SendBird.User>|null>([]);
  const [participantListQuery, setParticipantListQuery] = useState<SendBird.ParticipantListQuery | null>(null);
  useEffect(() => {
    if (!channel || !channel.createParticipantListQuery) {
      return;
    }
    const participantListQuery = channel.createParticipantListQuery();
    setParticipantListQuery(participantListQuery);
    participantListQuery.next((participantList, error) => {
      if (error) {
        return;
      }
      setParticipants(participantList);
    });
  }, [channel]);
  return (
    <div className="sendbird-openchannel-settings__participant">
      <div className="sendbird-openchannel-settings__header">
        <Label type={LabelTypography.H_2} color={LabelColors.ONBACKGROUND_1}>
          {stringSet.OPEN_CHANNEL_SETTINGS__PARTICIPANTS_TITLE}
        </Label>
        <Icon
          type={IconTypes.CLOSE}
          className="sendbird-openchannel-settings__close-icon"
          height="24px"
          width="24px"
          onClick={() => {
            onCloseClick();
          }}
        />
      </div>
      <div
        className="sendbird-openchannel-settings__participants-list"
        onScroll={(e) => {
          const { hasNext } = participantListQuery;
          const target = e.target as HTMLTextAreaElement;
          const fetchMore = (
            target.clientHeight + target.scrollTop === target.scrollHeight
          );

          if (hasNext && fetchMore) {
            participantListQuery.next((fetchedParticipants, error) => {
              if (error) {
                return;
              }
              setParticipants([
                ...participants,
                ...fetchedParticipants,
              ])
            });
          }
        }}
      >
        <div>
          {
            participants.map((p: SendBird.User) => (
              <UserListItem
                member={p}
                currentUser={currentUser}
                key={p.userId}
              />
            ))
          }
          {
            (participants && participants.length === 0)
              ? (
                  <Label
                    className="sendbird-channel-settings__empty-list"
                    type={LabelTypography.SUBTITLE_2}
                    color={LabelColors.ONBACKGROUND_3}
                  >
                    {stringSet.OPEN_CHANNEL_SETTINGS__EMPTY_LIST}
                  </Label>
              ): null
          }
        </div>
      </div>
    </div>
  )
}
