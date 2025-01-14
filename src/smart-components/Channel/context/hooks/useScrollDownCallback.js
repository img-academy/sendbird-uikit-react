import { useCallback } from 'react';

import * as messageActionTypes from '../dux/actionTypes';
import { NEXT_RESULT_SIZE } from '../const';

function useScrollDownCallback({
  currentGroupChannel,
  latestMessageTimeStamp,
  userFilledMessageListQuery,
  hasMoreNext,
  replyType,
}, {
  logger,
  messagesDispatcher,
  sdk,
}) {
  return useCallback((cb) => {
    if (!hasMoreNext) { return; }
    const { appInfo = {} } = sdk;
    const useReaction = appInfo.isUsingReaction || false;

    const messageListParams = new sdk.MessageListParams();
    messageListParams.nextResultSize = NEXT_RESULT_SIZE;
    messageListParams.isInclusive = true;
    messageListParams.includeReplies = false;
    messageListParams.includeReaction = useReaction;
    if (replyType && replyType === 'QUOTE_REPLY') {
      messageListParams.includeThreadInfo = true;
      messageListParams.includeParentMessageInfo = true;
      messageListParams.replyType = 'only_reply_to_channel';
    }
    if (userFilledMessageListQuery) {
      Object.keys(userFilledMessageListQuery).forEach((key) => {
        messageListParams[key] = userFilledMessageListQuery[key];
      });
    }
    logger.info('Channel: Fetching later messages', { currentGroupChannel, userFilledMessageListQuery });

    currentGroupChannel.getMessagesByTimestamp(
      latestMessageTimeStamp || new Date().getTime(),
      messageListParams,
    )
      .then((messages) => {
        messagesDispatcher({
          type: messageActionTypes.FETCH_NEXT_MESSAGES_SUCCESS,
          payload: { currentGroupChannel, messages },
        });
        cb([messages, null]);
      })
      .catch((error) => {
        logger.error('Channel: Fetching later messages failed', error);
        messagesDispatcher({
          type: messageActionTypes.FETCH_NEXT_MESSAGES_FAILURE,
          payload: { currentGroupChannel },
        });
        cb([null, error]);
      });
  }, [currentGroupChannel, latestMessageTimeStamp, hasMoreNext, replyType]);
}

export default useScrollDownCallback;
