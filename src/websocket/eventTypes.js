const eventTypes = {
    SEND_MESSAGE: "send-message",
    RECEIVE_MESSAGE: "receive-message",
    DELETE_MESSAGE: "delete-message",
    READ_MESSAGE: "read-message",
    GET_UNREAD_MESSAGES: "get-unread-messages",
    GET_UNDELIVERED_MESSAGES: "get-undelivered-messages",
    GET_ALL_MESSAGES: "get-all-messages",
    GET_MESSAGE_SENDERS: "get-message-senders",
    GET_MESSAGE_BY_ID: "get-message-by-id",
    MESSAGE_SENT: "message-sent",
    MESSAGE_RECEIVED: "message-received",
    MESSAGE_DELIVERED: "message-delivered",
    MESSAGE_READ: "message-read",
    MESSAGE_DELETED: "message-deleted",
    MESSAGE_UPDATED: "message-updated",
    MESSAGE_ERROR: "message-error",

    GET_ONLINE_USERS: "get-online-users",
    CHECK_USER_ONLINE: "check-user-online",

    GET_ALL_CONVERSATIONS: "get-all-conversations",
};

export default eventTypes;