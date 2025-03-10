import './channel-ui.scss';

import React, { useEffect, useState } from 'react';
import useSendbirdStateContext from '../../../../hooks/useSendbirdStateContext';

import { useChannel } from '../../context/ChannelProvider';
import PlaceHolder, { PlaceHolderTypes } from '../../../../ui/PlaceHolder';
import ConnectionStatus from '../../../../ui/ConnectionStatus';
import ChannelHeader from '../ChannelHeader';
import MessageList from '../MessageList';
import TypingIndicator from '../TypingIndicator';
import FrozenNotification from '../FrozenNotification';
import UnreadCount from '../UnreadCount';
import MessageInputWrapper from '../MessageInput';
import { RenderMessageProps } from '../../../../types';
import * as messageActionTypes from '../../context/dux/actionTypes';

export interface ChannelUIProps {
  renderPlaceholderLoader?: () => React.ReactNode;
  renderPlaceholderInvalid?: () => React.ReactNode;
  renderPlaceholderEmpty?: () => React.ReactNode;
  renderChannelHeader?: () => React.ReactNode;
  renderMessage?: (props: RenderMessageProps) => React.ReactNode;
  renderMessageInput?: () => React.ReactNode;
  renderTypingIndicator?: () => React.ReactNode;
  renderCustomSeparator?: () => React.ReactNode;
}

const ChannelUI: React.FC<ChannelUIProps> = ({
  renderPlaceholderLoader,
  renderPlaceholderInvalid,
  renderPlaceholderEmpty,
  renderChannelHeader,
  renderMessage,
  renderMessageInput,
  renderTypingIndicator,
  renderCustomSeparator,
}: ChannelUIProps) => {
  const {
    currentGroupChannel,
    channelUrl,
    isInvalid,
    unreadSince,
    loading,
    setInitialTimeStamp,
    setAnimatedMessageId,
    setHighLightedMessageId,
    scrollRef,
    messagesDispatcher,
  } = useChannel();
  const [unreadCount, setUnreadCount] = useState(0);
  useEffect(() => {
    setUnreadCount(currentGroupChannel.unreadMessageCount);
  }, [currentGroupChannel?.unreadMessageCount]);

  const globalStore = useSendbirdStateContext();
  const sdkError = globalStore?.stores?.sdkStore?.error;
  const logger = globalStore?.config?.logger;
  const isOnline = globalStore?.config?.isOnline;

  if (!channelUrl) {
    return (<div className="sendbird-conversation">
      {
        renderPlaceholderInvalid?.() || (
          <PlaceHolder type={PlaceHolderTypes.NO_CHANNELS} />
        )
      }
    </div>);
  }
  if (isInvalid) {
    return (
      <div className="sendbird-conversation">
        {
          renderPlaceholderInvalid?.() || (
            <PlaceHolder type={PlaceHolderTypes.WRONG} />
          )
        }
      </div>
    );
  }
  if (sdkError) {
    return (
      <div className="sendbird-conversation">
        {
          renderPlaceholderInvalid?.() || (
            <PlaceHolder
              type={PlaceHolderTypes.WRONG}
              retryToConnect={() => {
                logger.info('Channel: reconnecting');
                // reconnect();
              }}
            />
          )
        }
      </div>
    );
  }
  return (
    <div className='sendbird-conversation'>
      {
        renderChannelHeader?.() || (
          <ChannelHeader />
        )
      }
      {
        currentGroupChannel?.isFrozen && (
          <FrozenNotification />
        )
      }
      {
        unreadCount > 0 && (
          <UnreadCount
            count={unreadCount}
            time={unreadSince}
            onClick={() => {
              setUnreadCount(0);
              if (scrollRef?.current?.scrollTop) {
                scrollRef.current.scrollTop = scrollRef?.current?.scrollHeight - scrollRef?.current?.offsetHeight;
              }
              // currentGroupChannel?.markAsRead();
              messagesDispatcher({
                type: messageActionTypes.MARK_AS_READ,
                payload: { channel: currentGroupChannel },
              });
              setInitialTimeStamp(null);
              setAnimatedMessageId(null);
              setHighLightedMessageId(null);
            }}
          />
        )
      }
      {
        loading
          ? (
            <div className="sendbird-conversation">
              {
                renderPlaceholderLoader?.() || (
                  <PlaceHolder type={PlaceHolderTypes.LOADING} />
                )
              }
            </div>
          ) : (
            <MessageList
              renderMessage={renderMessage}
              renderPlaceholderEmpty={renderPlaceholderEmpty}
              renderCustomSeparator={renderCustomSeparator}
            />
          )
      }
      <div className="sendbird-conversation__footer">
        {
          renderMessageInput?.() || (
            <MessageInputWrapper />
          )
        }
        <div className="sendbird-conversation__footer__typing-indicator">
          {
            renderTypingIndicator?.() || (
              <TypingIndicator />
            )
          }
          {
            !isOnline && (
              <ConnectionStatus />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default ChannelUI;
