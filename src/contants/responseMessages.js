const ResponseMessages = {};

/// Required Field Response Messages
ResponseMessages.FIELD_REQUIRED = 'This field is required';
ResponseMessages.EMAIL_REQUIRED = 'Email is required';
ResponseMessages.EMAIL_USERNAME_REQUIRED = 'Email or username is required';
ResponseMessages.PASSWORD_REQUIRED = 'Password is required';
ResponseMessages.FIRST_NAME_REQUIRED = 'First name is required';
ResponseMessages.LAST_NAME_REQUIRED = 'Last name is required';
ResponseMessages.USERAME_REQUIRED = 'Username is required';
ResponseMessages.CONFIRM_PASSWORD_REQUIRED = 'Confirm password is required';
ResponseMessages.OLD_PASSWORD_REQUIRED = 'Old password is required';
ResponseMessages.NEW_PASSWORD_REQUIRED = 'New password is required';
ResponseMessages.PHONE_REQUIRED = 'Phone is required';
ResponseMessages.COUNTRY_CODE_REQUIRED = 'Country code is required';
ResponseMessages.OTP_REQUIRED = 'OTP is required';
ResponseMessages.ROLE_REQUIRED = 'Role is required';
ResponseMessages.MESSAGE_REQUIRED = 'Message is required';
ResponseMessages.PUBLIC_ID_REQUIRED = 'Public id is required';
ResponseMessages.URL_REQUIRED = 'URL is required';
ResponseMessages.MEDIA_TYPE_REQUIRED = 'Media type is required';
ResponseMessages.THUMBNAIL_REQUIRED = 'Thumbnail is required';
ResponseMessages.VIDEO_THUMBNAIL_REQUIRED = 'Video thumbnail is required';
ResponseMessages.CAPTION_REQUIRED = 'Caption is required';
ResponseMessages.MEDIA_FILES_REQUIRED = 'Media files is required';
ResponseMessages.POST_ID_REQUIRED = 'Post id is required';
ResponseMessages.VIDEO_THUMBNAIL_PUBLIC_ID_REQUIRED = 'Video thumbnail public id is required';
ResponseMessages.VIDEO_THUMBNAIL_URL_REQUIRED = 'Video thumbnail url is required';
ResponseMessages.COMMENT_REQUIRED = 'Comment is required';


/// Incorrect Response Messages
ResponseMessages.INCORRECT_EMAIL = 'Incorrect email';
ResponseMessages.INCORRECT_USERNAME = 'Incorrect username';
ResponseMessages.INCORRECT_PASSWORD = 'Incorrect password';
ResponseMessages.INCORRECT_OTP = 'Incorrect OTP';
ResponseMessages.INCORRECT_PHONE = 'Incorrect phone';
ResponseMessages.INCORRECT_CURRENT_PASSWORD = 'Incorrect current password';
ResponseMessages.INCORRECT_OLD_PASSWORD = 'Incorrect old password';

/// Success Response Messages
ResponseMessages.SUCCESS = 'Success';
ResponseMessages.LOGIN_SUCCESS = 'Login success';
ResponseMessages.SIGNUP_SUCCESS = 'Signup success';
ResponseMessages.LOGOUT_SUCCESS = 'Logout success';
ResponseMessages.OTP_SEND_SUCCESS = 'OTP sent successfully';
ResponseMessages.EMAIL_SEND_SUCCESS = 'Email sent successfully';
ResponseMessages.EMAIL_CHANGE_SUCCESS = 'Email changed successfully';
ResponseMessages.PASSWORD_CHANGE_SUCCESS = 'Password changed successfully';
ResponseMessages.PASSWORD_RESET_SUCCESS = 'Password reset successfully';
ResponseMessages.PHONE_CHANGE_SUCCESS = 'Phone changed successfully';
ResponseMessages.ACCOUNT_VERIFY_SUCCESS = 'Account verified successfully';
ResponseMessages.ACCOUNT_REACTIVATE_SUCCESS = 'Account reactivated successfully';
ResponseMessages.ACCOUNT_DEACTIVATE_SUCCESS = 'Account deactivated successfully';
ResponseMessages.PROFILE_PICTURE_UPLOAD_SUCCESS = 'Profile picture uploaded successfully';
ResponseMessages.PROFILE_PICTURE_REMOVE_SUCCESS = 'Profile picture removed successfully';
ResponseMessages.PROFILE_UPDATE_SUCCESS = 'Profile updated successfully';
ResponseMessages.POST_CREATE_SUCCESS = 'Post created successfully';
ResponseMessages.POST_UPDATE_SUCCESS = 'Post updated successfully';
ResponseMessages.POST_DELETE_SUCCESS = 'Post deleted successfully';
ResponseMessages.COMMENT_ADD_SUCCESS = 'Comment added successfully';
ResponseMessages.COMMENT_UPDATE_SUCCESS = 'Comment updated successfully';
ResponseMessages.COMMENT_DELETE_SUCCESS = 'Comment deleted successfully';
ResponseMessages.CHAT_MESSAGE_SENT_SUCCESS = 'Chat message sent successfully';
ResponseMessages.CHAT_MESSAGE_READ_SUCCESS = 'Chat message read successfully';
ResponseMessages.CHAT_MESSAGE_DELETE_SUCCESS = 'Chat message deleted successfully';

/// Failure Response Messages
ResponseMessages.FAILURE = 'Failure';
ResponseMessages.LOGIN_FAILURE = 'Login failure';
ResponseMessages.SIGNUP_FAILURE = 'Signup failure';
ResponseMessages.LOGOUT_FAILURE = 'Logout failure';
ResponseMessages.OTP_SEND_FAILURE = 'OTP send failure';
ResponseMessages.EMAIL_SEND_FAILURE = 'Email send failure';
ResponseMessages.CHAT_MESSAGE_READ_FAILURE = 'Chat message read failure';
ResponseMessages.CHAT_MESSAGE_DELETE_FAILURE = 'Chat message delete failure';
ResponseMessages.CHAT_MESSAGE_TYPING_FAILURE = 'Chat message typing failure';
ResponseMessages.ONLINE_USERS_FAILURE = 'Online users failure';

ResponseMessages.EMAIL_NOT_SENT = 'Email not sent';

/// Delete Response Messages
ResponseMessages.ACCOUNT_DELETED = 'Account deleted';

/// Other Response Messages
ResponseMessages.PUBLIC_KEY_SAVED = 'Public key saved';
ResponseMessages.PUBLIC_KEY_NOT_SAVED = 'Public key not saved';
ResponseMessages.CHAT_MESSAGES_RECEIVED = 'Chat messages received';
ResponseMessages.CHAT_MESSAGES_NOT_RECEIVED = 'Chat messages not received';
ResponseMessages.CLIENT_NOT_CONNECTED = 'Client not connected';
ResponseMessages.CHAT_MESSAGE_RECEIVED = 'Chat message received';
ResponseMessages.CHAT_MESSAGE_ALREADY_READ = 'Chat message already read';
ResponseMessages.CHAT_MESSAGE_NOT_SENT = 'Chat message not sent';
ResponseMessages.AUTH_TOKEN_REQUIRED = 'Auth token is required';
ResponseMessages.AUTH_PARAM_REQUIRED = 'Auth param is required';
ResponseMessages.ACCOUNT_ALREADY_DEACTIVATED = 'Account already deactivated';
ResponseMessages.ACCOUNT_ALREADY_ACTIVE = 'Account already active';
ResponseMessages.ACCOUNT_SUSPENDED = 'Account suspended';
ResponseMessages.ACCOUNT_DEACTIVATED = 'Account deactivated';
ResponseMessages.USERAME_NOT_AVAILABLE = 'Username not available';
ResponseMessages.PASSWORDS_DO_NOT_MATCH = 'Passwords do not match';
ResponseMessages.EMAIL_ALREADY_USED = 'Email already used';
ResponseMessages.USERNAME_ALREADY_USED = 'Username already used';
ResponseMessages.ACCOUNT_ALREADY_EXISTS = 'Account already exists with this email';
ResponseMessages.ACCOUNT_NOT_FOUND = 'Account not found';
ResponseMessages.ACCOUNT_NOT_VERIFIED = 'Account not verified';
ResponseMessages.ACCOUNT_ALREADY_VERIFIED = 'Account already verified';
ResponseMessages.CANNOT_FOLLOW_YOURSELF = 'You cannot follow yourself';

ResponseMessages.ACCOUNT_SUPERADMIN = 'Superadmin account';
ResponseMessages.ACCOUNT_ADMIN = 'Admin account';
ResponseMessages.ACCOUNT_USER = 'User account';
ResponseMessages.ACCOUNT_MODERATOR = 'Moderator account';

ResponseMessages.OTP_ALREADY_SENT = 'OTP already sent';
ResponseMessages.OTP_EXPIRED = 'OTP expired';
ResponseMessages.OTP_NOT_SENT = 'OTP not sent';
ResponseMessages.OTP_ALREADY_USED = 'OTP already used';

ResponseMessages.EMAIL_ALREADY_EXISTS = 'Email already exists';
ResponseMessages.EMAIL_ALREADY_ASSOSIATED = 'Email already associated with another account';
ResponseMessages.PHONE_ALREADY_EXISTS = 'Phone already exists';
ResponseMessages.PHONE_ALREADY_USED = 'This phone number is already used';

ResponseMessages.VALID_TOKEN = 'Valid token';
ResponseMessages.CORRECT_PASSWORD = 'Correct password';

ResponseMessages.PROFILE_PICTURE_NOT_FOUND = 'Profile picture not found';

ResponseMessages.POST_NOT_FOUND = 'Post not found';
ResponseMessages.POST_LIKED = 'Post liked';
ResponseMessages.POST_UNLIKED = 'Post unliked';
ResponseMessages.POST_DELETED = 'Post deleted';
ResponseMessages.POST_ALREADY_DELETED = 'Post already deleted';

ResponseMessages.COMMENT_NOT_FOUND = 'Comment not found';
ResponseMessages.COMMENT_LIKED = 'Comment liked';
ResponseMessages.COMMENT_UNLIKED = 'Comment unliked';

ResponseMessages.FOLLOWING = 'Following';
ResponseMessages.UNFOLLOWING = 'Unfollowing';
ResponseMessages.ALREADY_FOLLOWING = 'Already following';
ResponseMessages.ALREADY_UNFOLLOWING = 'Already unfollowing';
ResponseMessages.UNFOLLOWED_USER = 'Unfollowed user';
ResponseMessages.FOLLOWED_USER = 'Followed user';
ResponseMessages.FOLLOW_REQUEST_ALREADY_SENT = 'Follow request already sent';
ResponseMessages.FOLLOW_REQUEST_SENT = 'Follow request sent';
ResponseMessages.FOLLOW_REQUEST_ACCEPTED = 'Follow request accepted';
ResponseMessages.FOLLOW_REQUEST_REMOVED = 'Follow request removed';
ResponseMessages.FOLLOW_REQUEST_CANCELLED = 'Follow request cancelled';
ResponseMessages.FOLLOW_REQUEST_NOT_FOUND = 'Follow request not found';
ResponseMessages.USER_IS_NOT_FOLLOWER = 'User is not follower';
ResponseMessages.REMOVED_FOLLOWER = 'Removed follower';

ResponseMessages.PREKEY_BUNDLE_SAVED = 'Prekey bundle saved';
ResponseMessages.PREKEY_BUNDLE_NOT_SAVED = 'Prekey bundle not saved';
ResponseMessages.PREKEY_BUNDLE_NOT_FOUND = 'Prekey bundle not found';
ResponseMessages.PREKEY_BUNDLE_RECEIVED = 'Prekey bundle received';
ResponseMessages.PREKEY_BUNDLE_NOT_RECEIVED = 'Prekey bundle not received';

ResponseMessages.DEVICE_ID_NOT_FOUND = 'Device id not found';
ResponseMessages.DEVICE_ID_ALREADY_EXISTS = 'Device id already exists';
ResponseMessages.DEVICE_ID_SAVED = 'Device id saved';
ResponseMessages.DEVICE_ID_NOT_SAVED = 'Device id not saved';
ResponseMessages.DEVICE_ID_DELETED = 'Device id deleted';
ResponseMessages.DEVICE_ID_RECEIVED = 'Device id received';

ResponseMessages.FCM_TOKEN_SAVED = 'FCM token saved';
ResponseMessages.FCM_TOKEN_NOT_SAVED = 'FCM token not saved';
ResponseMessages.FCM_TOKEN_NOT_FOUND = 'FCM token not found';
ResponseMessages.FCM_TOKEN_RECEIVED = 'FCM token received';
ResponseMessages.FCM_TOKEN_NOT_RECEIVED = 'FCM token not received';

ResponseMessages.CANNOT_MESSAGE_YOURSELF = 'You cannot message yourself';
ResponseMessages.CHAT_MESSAGE_TYPING = 'Chat message typing';
ResponseMessages.CHAT_MESSAGE_NOT_TYPING = 'Chat message not typing';

ResponseMessages.ONLINE_USERS = 'Online users';

ResponseMessages.CHAT_MESSAGE_ALREADY_DELETED = 'Chat message already deleted';

ResponseMessages.NOT_AUTHORIZED = 'Not authorized';
ResponseMessages.UNAUTHORIZED_ACCESS = 'Unauthorized access';

/// Invalid Response Messages
ResponseMessages.CHAT_MESSAGE_NOT_FOUND = 'Chat message not found';
ResponseMessages.INVALID_ACTION = 'Invalid action';
ResponseMessages.INVALID = 'Invalid';
ResponseMessages.INVALID_DATA = 'Invalid data';
ResponseMessages.ACCOUNT_NOT_ACTIVE = 'Account not active';
ResponseMessages.INVALID_EXPIRED_TOKEN = 'Invalid or expired token';
ResponseMessages.INVALID_PHONE = 'Invalid phone';
ResponseMessages.INVALID_EMAIL = 'Invalid email';
ResponseMessages.INVALID_USERNAME = 'Invalid username';
ResponseMessages.INVALID_PASSWORD = 'Invalid password';
ResponseMessages.INVALID_OTP = 'Invalid OTP';
ResponseMessages.INVALID_FIRST_NAME_LENGTH = 'First name must be at least 3 characters';
ResponseMessages.INVALID_LAST_NAME_LENGTH = 'Last name must be at least 1 characters';
ResponseMessages.INVALID_USERNAME_LENGTH = 'Username must be between 3-15 characters';
ResponseMessages.INVALID_CREDENTIALS = 'Invalid credentials';
ResponseMessages.INVALID_TOKEN = 'Invalid token';
ResponseMessages.EXPIRED_TOKEN = 'Expired token';
ResponseMessages.INVALID_REQUEST = 'Invalid request';
ResponseMessages.INVALID_PARAMETERS = 'Invalid parameters';
ResponseMessages.INVALID_EMAIL = 'Invalid email';
ResponseMessages.INVALID_PASSWORD = 'Invalid password';
ResponseMessages.INVALID_USERNAME = 'Invalid username';
ResponseMessages.INVALID_USER = 'Invalid user';
ResponseMessages.INVALID_USER_ID = 'Invalid user id';
ResponseMessages.INVALID_USER_TYPE = 'Invalid user type';
ResponseMessages.INVALID_USER_STATUS = 'Invalid user status';
ResponseMessages.INVALID_USER_ACCOUNT_STATUS = 'Invalid user account status';
ResponseMessages.INVALID_ACCOUNT_VALIDATION = 'Your account is not verified, please verify your account';
ResponseMessages.UNAUTHORIZED = 'You are not authorized to perform this operation';
ResponseMessages.NOT_FOUND = 'Not found';
ResponseMessages.INVALID_REQUEST = 'Invalid request';
ResponseMessages.INVALID_PARAMETERS = 'Invalid parameters';
ResponseMessages.INVALID_QUERY_PARAMETERS = 'Invalid query parameters';
ResponseMessages.INVALID_REQUEST_BODY = 'Invalid request body';
ResponseMessages.INVALID_REQUEST_PARAMETERS = 'Invalid request parameters';
ResponseMessages.SIGNUP_EMAIL_VERIFICATION_SUCCESS = 'Signup email verification success';
ResponseMessages.SIGNUP_EMAIL_VERIFICATION_FAILURE = 'Signup email verification failure';
ResponseMessages.SIGNUP_EMAIL_VERIFICATION_FAILURE_ALREADY_VERIFIED = 'Signup email verification failure - already verified';
ResponseMessages.SIGNUP_EMAIL_VERIFICATION_FAILURE_EXPIRED = 'Signup email verification failure - expired';
ResponseMessages.SIGNUP_EMAIL_VERIFICATION_FAILURE_INVALID = 'Signup email verification failure - invalid';
ResponseMessages.SIGNUP_EMAIL_VERIFICATION_FAILURE_NOT_FOUND = 'Signup email verification failure - not found';
ResponseMessages.USER_NOT_FOUND = 'User not found';
ResponseMessages.USER_CREATION_FAILURE = 'User creation failure';
ResponseMessages.NOTIFICATION_NOT_FOUND = 'Notification not found';
ResponseMessages.NOTIFICATION_MARKED_READ = 'Notification marked read';
ResponseMessages.NOTIFICATION_ALREADY_READ = 'Notification already read';
ResponseMessages.NOTIFICATION_DELETED = 'Notification deleted';

export default ResponseMessages;