import { a as _slicedToArray } from './_rollupPluginBabelHelpers-0ec97672.js';
import React__default, { useState } from 'react';
import PropTypes from 'prop-types';
import Sendbird from './SendbirdProvider.js';
import ChannelList from './ChannelList.js';
import Channel from './Channel.js';
import ChannelSettings from './ChannelSettings.js';
import MessageSearchPannel from './MessageSearch.js';
import './withSendBird.js';
import 'sendbird';
import './actionTypes-9995a4fe.js';
import './index-a1462526.js';
import './tslib.es6-cee0628b.js';
import 'css-vars-ponyfill';
import './uuid-b12b05c7.js';
import './LocalizationContext-79eb0635.js';
import './stringSet-4614f875.js';
import './index-7e8c8e8d.js';
import './ChannelListProvider-23f83387.js';
import './topics-af18f6dc.js';
import './utils-a66b9c45.js';
import './UserProfileContext-9b9928cf.js';
import './useSendbirdStateContext.js';
import './ChannelList/components/ChannelListUI.js';
import './ChannelList/components/ChannelListHeader.js';
import './index-3db1006f.js';
import './ui/IconButton.js';
import './ui/Avatar.js';
import './ui/ImageRenderer.js';
import './ui/Icon.js';
import './ChannelList/components/AddChannel.js';
import './CreateChannel.js';
import './CreateChannel/components/CreateChannelUI.js';
import './CreateChannelProvider-33c5276e.js';
import './sendBirdSelectors.js';
import './CreateChannel/components/InviteMembers.js';
import './ui/Modal.js';
import 'react-dom';
import './index-2db42eac.js';
import './index-775a609a.js';
import './ui/UserListItem.js';
import './ui/MutedAvatarOverlay.js';
import './ui/Checkbox.js';
import './ui/UserProfile.js';
import './ui/ContextMenu.js';
import './ui/SortByRow.js';
import './CreateChannel/components/SelectChannelType.js';
import './ChannelList/components/ChannelPreview.js';
import './ui/ChannelAvatar.js';
import './utils-bfbe8356.js';
import './ui/Badge.js';
import './index-d4c08fec.js';
import './index-6d919a6a.js';
import './index-54fd64c3.js';
import './ui/MentionUserLabel.js';
import './Channel/components/TypingIndicator.js';
import './ChannelProvider-94aeef2f.js';
import './compareIds-91189cc3.js';
import './const-7d66ce8b.js';
import './ui/ReactionButton.js';
import './ui/MessageStatus.js';
import './ui/Loader.js';
import './ChannelList/components/ChannelPreviewAction.js';
import './EditUserProfile.js';
import './index-1d08abd2.js';
import './ui/Input.js';
import './ui/TextButton.js';
import './color-29648548.js';
import './index-9d8b78a7.js';
import './Channel/components/ChannelUI.js';
import './ui/ConnectionStatus.js';
import './Channel/components/ChannelHeader.js';
import './Channel/components/MessageList.js';
import './Channel/components/Message.js';
import './Channel/components/SuggestedMentionList.js';
import './const-f8c6fa59.js';
import './ui/DateSeparator.js';
import './ui/MessageInput.js';
import 'stream';
import './ui/MessageContent.js';
import './ui/MessageItemMenu.js';
import './ui/MessageItemReactionMenu.js';
import './ui/EmojiReactions.js';
import './ui/Tooltip.js';
import './ui/TooltipWrapper.js';
import './ui/ReactionBadge.js';
import './ui/AdminMessage.js';
import './ui/TextMessageItemBody.js';
import './index-ce798211.js';
import './ui/LinkLabel.js';
import './ui/MentionLabel.js';
import './ui/FileMessageItemBody.js';
import './ui/ThumbnailMessageItemBody.js';
import './ui/OGMessageItemBody.js';
import './ui/UnknownMessageItemBody.js';
import './ui/QuoteMessage.js';
import './Channel/components/FileViewer.js';
import './Channel/components/RemoveMessageModal.js';
import './Channel/components/FrozenNotification.js';
import './Channel/components/UnreadCount.js';
import './Channel/components/MessageInput.js';
import './ui/QuoteMessageInput.js';
import './ChannelSettings/components/ChannelSettingsUI.js';
import './ChannelSettings/context.js';
import './ChannelSettings/components/ChannelProfile.js';
import './ChannelSettings/components/EditDetailsModal.js';
import './ChannelSettings/components/AdminPanel.js';
import './ui/Accordion.js';
import './ui/AccordionGroup.js';
import './context-b0bb3e69.js';
import './ChannelSettings/components/UserListItem.js';
import './MemberList-05fb4b87.js';
import './ChannelSettings/components/LeaveChannel.js';
import './ChannelSettings/components/UserPanel.js';
import './MessageSearch/components/MessageSearchUI.js';
import './MessageSearch/context.js';
import './ui/MessageSearchItem.js';
import './ui/MessageSearchFileItem.js';

function App(props) {
  var appId = props.appId,
      userId = props.userId,
      accessToken = props.accessToken,
      theme = props.theme,
      userListQuery = props.userListQuery,
      nickname = props.nickname,
      profileUrl = props.profileUrl,
      dateLocale = props.dateLocale,
      _props$config = props.config,
      config = _props$config === void 0 ? {} : _props$config,
      useReaction = props.useReaction,
      isMentionEnabled = props.isMentionEnabled,
      replyType = props.replyType,
      useMessageGrouping = props.useMessageGrouping,
      colorSet = props.colorSet,
      stringSet = props.stringSet,
      allowProfileEdit = props.allowProfileEdit,
      disableUserProfile = props.disableUserProfile,
      renderUserProfile = props.renderUserProfile,
      showSearchIcon = props.showSearchIcon,
      onProfileEditSuccess = props.onProfileEditSuccess,
      imageCompression = props.imageCompression,
      disableAutoSelect = props.disableAutoSelect,
      isTypingIndicatorEnabledOnChannelList = props.isTypingIndicatorEnabledOnChannelList,
      isMessageReceiptStatusEnabledOnChannelList = props.isMessageReceiptStatusEnabledOnChannelList;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      currentChannelUrl = _useState2[0],
      setCurrentChannelUrl = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showSettings = _useState4[0],
      setShowSettings = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showSearch = _useState6[0],
      setShowSearch = _useState6[1];

  var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      highlightedMessage = _useState8[0],
      setHighlightedMessage = _useState8[1];

  var _useState9 = useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      startingPoint = _useState10[0],
      setStartingPoint = _useState10[1];

  return /*#__PURE__*/React__default.createElement(Sendbird, {
    stringSet: stringSet,
    appId: appId,
    userId: userId,
    accessToken: accessToken,
    theme: theme,
    nickname: nickname,
    profileUrl: profileUrl,
    dateLocale: dateLocale,
    userListQuery: userListQuery,
    config: config,
    colorSet: colorSet,
    disableUserProfile: disableUserProfile,
    renderUserProfile: renderUserProfile,
    imageCompression: imageCompression,
    useReaction: useReaction,
    isMentionEnabled: isMentionEnabled,
    isTypingIndicatorEnabledOnChannelList: isTypingIndicatorEnabledOnChannelList,
    isMessageReceiptStatusEnabledOnChannelList: isMessageReceiptStatusEnabledOnChannelList
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-app__wrap"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-app__channellist-wrap"
  }, /*#__PURE__*/React__default.createElement(ChannelList, {
    allowProfileEdit: allowProfileEdit,
    onProfileEditSuccess: onProfileEditSuccess,
    disableAutoSelect: disableAutoSelect,
    onChannelSelect: function onChannelSelect(channel) {
      setStartingPoint(null);
      setHighlightedMessage(null);

      if (channel && channel.url) {
        setCurrentChannelUrl(channel.url);
      } else {
        setCurrentChannelUrl('');
      }
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "\n            ".concat(showSettings ? 'sendbird-app__conversation--settings-open' : '', "\n            ").concat(showSearch ? 'sendbird-app__conversation--search-open' : '', "\n            sendbird-app__conversation-wrap\n          ")
  }, /*#__PURE__*/React__default.createElement(Channel, {
    channelUrl: currentChannelUrl,
    onChatHeaderActionClick: function onChatHeaderActionClick() {
      setShowSearch(false);
      setShowSettings(!showSettings);
    },
    onSearchClick: function onSearchClick() {
      setShowSettings(false);
      setShowSearch(!showSearch);
    },
    showSearchIcon: showSearchIcon,
    startingPoint: startingPoint,
    highlightedMessage: highlightedMessage,
    useReaction: useReaction,
    replyType: replyType,
    useMessageGrouping: useMessageGrouping
  })), showSettings && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-app__settingspanel-wrap"
  }, /*#__PURE__*/React__default.createElement(ChannelSettings, {
    className: "sendbird-channel-settings",
    channelUrl: currentChannelUrl,
    onCloseClick: function onCloseClick() {
      setShowSettings(false);
    }
  })), showSearch && /*#__PURE__*/React__default.createElement("div", {
    className: "sendbird-app__searchpanel-wrap"
  }, /*#__PURE__*/React__default.createElement(MessageSearchPannel, {
    channelUrl: currentChannelUrl,
    onResultClick: function onResultClick(message) {
      if (message.messageId === highlightedMessage) {
        setHighlightedMessage(null);
        setTimeout(function () {
          setHighlightedMessage(message.messageId);
        });
      } else {
        setStartingPoint(message.createdAt);
        setHighlightedMessage(message.messageId);
      }
    },
    onCloseClick: function onCloseClick() {
      setShowSearch(false);
    }
  }))));
}
App.propTypes = {
  appId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  accessToken: PropTypes.string,
  theme: PropTypes.string,
  userListQuery: PropTypes.func,
  nickname: PropTypes.string,
  profileUrl: PropTypes.string,
  allowProfileEdit: PropTypes.bool,
  disableUserProfile: PropTypes.bool,
  renderUserProfile: PropTypes.func,
  onProfileEditSuccess: PropTypes.func,
  dateLocale: PropTypes.shape({}),
  config: PropTypes.shape({
    // None Error Warning Info 'All/Debug'
    logLevel: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
  }),
  useReaction: PropTypes.bool,
  replyType: PropTypes.oneOf(['NONE', 'QUOTE_REPLY', 'THREAD']),
  showSearchIcon: PropTypes.bool,
  useMessageGrouping: PropTypes.bool,
  stringSet: PropTypes.objectOf(PropTypes.string),
  colorSet: PropTypes.objectOf(PropTypes.string),
  imageCompression: PropTypes.shape({
    compressionRate: PropTypes.number,
    resizingWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    resizingHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }),
  disableAutoSelect: PropTypes.bool,
  isMentionEnabled: PropTypes.bool,
  isTypingIndicatorEnabledOnChannelList: PropTypes.bool,
  isMessageReceiptStatusEnabledOnChannelList: PropTypes.bool
};
App.defaultProps = {
  accessToken: '',
  theme: 'light',
  nickname: '',
  profileUrl: '',
  userListQuery: null,
  dateLocale: null,
  allowProfileEdit: false,
  onProfileEditSuccess: null,
  disableUserProfile: false,
  showSearchIcon: false,
  renderUserProfile: null,
  config: {},
  useReaction: true,
  isMentionEnabled: false,
  replyType: 'NONE',
  useMessageGrouping: true,
  stringSet: null,
  colorSet: null,
  imageCompression: {},
  disableAutoSelect: false,
  isTypingIndicatorEnabledOnChannelList: false,
  isMessageReceiptStatusEnabledOnChannelList: false
};

export { App as default };
//# sourceMappingURL=App.js.map
