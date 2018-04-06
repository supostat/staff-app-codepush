import { Dimensions, StyleSheet, Platform } from 'react-native';
import deviceInfo from '../../utils/deviceInfo';
import sizeNormalizer from '../../utils/sizeNormalizer';
let normalize = sizeNormalizer.normalize;

// Layout Blocks
const MainStyles = {
  main: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  mainHeader: {
  },
  mainHeaderInner: {
    backgroundColor: '#ffffff'
  },
  mainContent: {
    flex: 1
  },
  mainContentScroll: {
    flex: 1
  },
  mainContentInner: {
    paddingVertical: 24,
    paddingHorizontal: 16
  },
  mainContentInnerTablet: {
    paddingHorizontal: 32
  },
  mainFooter: {
  },
  mainFooterInner: {
    backgroundColor: '#ffffff'
  }
}

const ServiceStyles = {
  service: {
  },
  serviceTypeCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  serviceContent: {
    position: 'relative'
  },
  serviceContentTypeCard: {
    flex: 1,
    maxWidth: 640,
    padding: 24,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 10,
    shadowColor: '#4c4c4c',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 24,
    elevation: 5
  },
  serviceSettings: {
    position: 'absolute',
    top: -24,
    right: -16,
    zIndex: 1000
  },
  serviceSettingsTypeCard: {
    top: -8,
    right: 0
  },
  serviceSettingsIcon: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    fontFamily: 'icons',
    fontSize: normalize(14),
    lineHeight: normalize(14),
    color: '#aaaaaa'
  },
  serviceImage: {
    alignItems: 'center',
    marginBottom: 24
  },
  serviceProgress: {
    alignItems: 'center',
    marginBottom: 24
  },
  serviceTitle: {
    marginBottom: 24,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: normalize(24),
    lineHeight: normalize(24),
    fontWeight: '600',
    color: '#4c4c4c',
    textAlign: 'center'
  },
  serviceSubtitle: {
    marginBottom: 24,
    fontFamily: 'Montserrat-Light',
    fontSize: normalize(18),
    lineHeight: normalize(24),
    fontWeight: '300',
    color: '#4c4c4c',
    textAlign: 'center'
  },
  serviceSubtitleMarked: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
  },
  serviceNote: {
    marginBottom: 24
  },
  serviceNoteLast: {
    marginBottom: 0
  },
  serviceForm: {
    marginBottom: 24
  },
  serviceFormLast: {
    marginBottom: 0
  },
  serviceActions: {
    alignItems: 'center'
  },
  serviceActionsLayoutRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
}

const ProfileStyles = {
  profile: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  profileContent: {
    flex: 1
  },
  profileContentTypeNarrow: {
    maxWidth: 480
  },
  profileHeader: {
    marginBottom: 24
  },
  profileInfo: {
  }
}

const FormStyles = {
  form: {
  },
  formAlert: {
    marginBottom: 16
  },
  formGroup: {
    marginBottom: 24
  },
  formGroupLast: {
    marginBottom: 0
  },
  formActions: {
    alignItems: 'center'
  }
}

const RotaStyles = {
  rota: {
  },
  rotaFilter: {
    marginBottom: 32
  },
  rotaList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 32
  },
  rotaItem: {
    marginBottom: 24
  },
  rotaActions: {
    alignItems: 'center'
  },
  rotaTextPlaceholder: {
    fontFamily: 'Montserrat-Regular',
    fontSize: normalize(16),
    lineHeight: normalize(16),
    fontWeight: '400',
    color: '#808080',
    textAlign: 'center'
  },
  rotaTextPlaceholderTablet: {
    fontSize: normalize(18),
    lineHeight: normalize(18)
  }
}

// Common BLocks
const SwitchStyles = {
  switch: {
    marginBottom: 16
  },
  switchLast: {
    paddingBottom: 16,
    marginBottom: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#d8d8d8'
  },
  switchContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  switchLabel: {
    fontFamily: 'Montserrat-Regular',
    fontSize: normalize(14),
    lineHeight: normalize(14),
    color: '#4c4c4c',
    fontWeight: '400'
  },
  switchInput: {
  },
}

const CheckboxStyles = {
  checkbox: {
    marginBottom: 16
  },
  checkboxLast: {
    marginBottom: 0
  },
  checkboxContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkboxInput: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    marginRight: 8,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#d8d8d8'
  },
  checkboxInputIcon: {
    fontFamily: 'icons',
    fontSize: normalize(14),
    lineHeight: normalize(14),
    color: '#aaaaaa'
  },
  checkboxLabel: {
    marginTop: 4,
    fontFamily: 'Montserrat-Regular',
    fontSize: normalize(14),
    lineHeight: normalize(14),
    color: '#4c4c4c',
    fontWeight: '400'
  }
}

const TextInputStyles = {
  textInput: {
    marginBottom: 16
  },
  textInputLast: {
    marginBottom: 0
  },
  textInputIconWrap: {
    position: 'relative'
  },
  textInputIcon: {
    position: 'absolute',
    top: 0,
    zIndex: 10,
    fontFamily: 'icons',
    fontSize: normalize(14),
    lineHeight: 40,
    color: '#808080'
  },
  textInputIconPositionBefore: {
    left: 8
  },
  textInputIconPositionAfter: {
    position: 'absolute',
    right: 8
  },
  textInputField: {
    height: 40,
    paddingLeft: 16,
    paddingRight: 16,
    borderColor: '#d8d8d8',
    borderWidth: 1,
    fontSize: normalize(14),
    lineHeight: normalize(14),
    color: '#4c4c4c',
    borderRadius: 2
  },
  textInputFieldStateAlert: {
    borderColor: '#ed7f7e',
    color: '#ed7f7e'
  },
  textInputFieldTypeIconBefore: {
    paddingLeft: 32
  },
  textInputFieldTypeIconAfter: {
    paddingRight: 32
  }
}

const ButtonStyles = {
  button: {
  },
  buttonLayoutFull: {
    alignSelf: 'stretch'
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4
  },
  buttonContentSizeSmall: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  buttonContentThemeBlue: {
    backgroundColor: '#84bef0'
  },
  buttonContentThemeGray: {
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#d8d8d8'
  },
  buttonText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: normalize(14),
    lineHeight: normalize(14),
    fontWeight: '400'
  },
  buttonTextSizeSmall: {
    fontSize: normalize(12),
    lineHeight: normalize(12),
  },
  buttonTextThemeLight: {
    color: '#ffffff'
  },
  buttonTextThemeDark: {
    color: '#4c4c4c'
  },
  buttonIcon: {
    marginTop: -2,
    fontFamily: 'icons',
    fontSize: normalize(14),
    lineHeight: normalize(14)
  },
  buttonIconThemeLight: {
    color: '#ffffff'
  },
  buttonIconThemeDark: {
    color: '#4c4c4c'
  },
  buttonIconPositionBefore: {
    marginRight: 8
  },
  buttonIconPositionAfter: {
    marginLeft: 8
  }
}

const ActionStyles = {
  action: {
  },
  actionContent: {
  },
  actionText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: normalize(14),
    lineHeight: normalize(14),
    fontWeight: '400',
    color: '#808080'
  }
}

const MessageStyles = {
  message: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#eee'
  },
  messageRoleNote: {
    borderRadius: 0,
    padding: 12
  },
  messageRoleAlert: {
    backgroundColor: '#ed7f7e'
  },
  messageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  messageCounter: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: normalize(14),
    lineHeight: normalize(14),
    fontWeight: '600',
    color: '#4c4c4c'
  },
  messageCounterTablet: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: normalize(18),
    lineHeight: normalize(18)
  },
  messageCounterThemeLight: {
    color: '#ffffff'
  },
  messageText: {
    fontFamily: 'Montserrat-Light',
    fontSize: normalize(14),
    lineHeight: normalize(14),
    fontWeight: '300',
    color: '#4c4c4c'
  },
  messageTextThemeLight: {
    color: '#ffffff'
  },
  messageTextMarked: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600'
  }
}

const NoteStyles = {
  note: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  noteLayoutColumn: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  noteContent: {
    flex: 1
  },
  noteText: {
    fontFamily: 'Montserrat-Light',
    fontSize: normalize(14),
    lineHeight: normalize(16),
    fontWeight: '300',
    color: '#4c4c4c'
  },
  noteTextMarked: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600'
  },
  noteTextLayoutColumn: {
    textAlign: 'center'
  },
  noteTextTablet: {
    fontSize: normalize(16),
    lineHeight: normalize(18),
  },
  noteIcon: {
    marginRight: 8,
    fontFamily: 'icons',
    fontSize: 40,
    lineHeight: 42,
    color: '#808080'
  },
  noteIconLayoutColumn: {
    fontSize: 80,
    lineHeight: 82,
    marginRight: 0,
    marginBottom: 16
  },
  noteIconRoleAlert: {
    color: '#ed7f7e'
  },
  noteIconRoleSuccess: {
    color: '#86dd75'
  }
}

const userSummary = {
  userSummary: {
  },
  userSummaryGroup: {
    alignItems: 'center'
  },
  userSummaryGroupRoleAddShift: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  userSummaryGroupRoleRota: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  userSummaryAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16
  },
  userSummaryAvatarRoleAddShift: {
    marginBottom: 0,
    marginRight: 16
  },
  userSummaryAvatarRoleRota: {
    marginBottom: 0,
    marginRight: 24
  },
  userSummaryAvatarRoleProfile: {
    marginBottom: 24
  },
  userSummaryInfo: {
    paddingRight: 24
  },
  userSummaryAvatarImage: {
    borderWidth: 1,
    borderColor: 'transparent'
  },
  userSummaryTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: normalize(14),
    lineHeight: normalize(14),
    fontWeight: '400',
    color: '#4c4c4c',
    textAlign: 'center'
  },
  userSummaryTitleRoleRota: {
    fontSize: normalize(16),
    lineHeight: normalize(16),
    textAlign: 'left'
  },
  userSummaryTitleRoleAddShift: {
    fontSize: normalize(18),
    lineHeight: normalize(18),
    textAlign: 'left'
  },
  userSummaryTitleRoleProfile: {
    fontSize: normalize(24),
    lineHeight: normalize(24)
  },
}

const InfoCardStyles = {
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderLeftWidth: 10,
    borderLeftColor: '#4c4c4c',
    shadowColor: '#4c4c4c',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2
  },
  infoCardStatusPending: {
    borderLeftColor: '#aaaaaa'
  },
  infoCardStatusReceived: {
    borderLeftColor: '#86dd75'
  },
  infoCardStateAlert: {
    backgroundColor: '#feeeee'
  },
  infoCardInner: {
    padding: 8
  },
  infoCardInnerTablet: {
    padding: 16
  },
  infoCardTitle: {
    marginBottom: 12,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: normalize(16),
    lineHeight: normalize(16),
    fontWeight: '600',
    color: '#4c4c4c'
  },
  infoCardTitleTablet: {
    fontSize: normalize(20),
    lineHeight: normalize(20)
  },
  infoCardTitleStatusPending: {
    color: '#aaaaaa'
  },
  infoCardTitleStatusReceived: {
    color: '#86dd75'
  },
  infoCardRecord: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infoCardRecordMobilePortrait: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  infoCardRecordText: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  infoCardRecordTextMobilePortrait: {
    flex: 1
  },
  infoCardRecordActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  infoCardRecordActionsMobilePortrait: {
    flex: 1,
    marginTop: 12
  },
  infoCardText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: normalize(14),
    lineHeight: normalize(18),
    fontWeight: '400',
    color: '#4c4c4c'
  },
  infoCardTextTablet: {
    fontSize: normalize(18),
    lineHeight: normalize(18)
  },
  infoCardTextPrimary: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600'

  },
  infoCardTextSecondary: {
    fontFamily: 'Montserrat-Light',
    fontWeight: '300'

  },
  infoCardTextAdjustRow: {
    marginRight: 20
  }
}

const ModalStyles = {
  modalPortal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalPortalScroll: {
    flex: 1
  },
  modalContent: {
    position: 'relative',
    margin: 32,
    padding: 12
  },
  modalClose: {
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0
  },
  modalCloseInner: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 12,
    shadowColor: '#4c4c4c',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4
  },
  modalCloseIcon: {
    fontFamily: 'icons',
    fontSize: 16,
    lineHeight: 16,
    color: '#4c4c4c'
  },
  modalWindow: {
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
    width: 450,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 4
  },
  modalWindowMobilePortrait: {
    width: 300
  },
  modalWindowHeader: {
    padding: 16,
    backgroundColor: '#f0f0f0'
  },
  modalWindowHeaderRoleAlert: {
    backgroundColor: '#ed7f7e'
  },
  modalWindowHeaderRoleWarning: {
    backgroundColor: '#f4a84f'
  },
  modalWindowHeaderRoleSuccess: {
    backgroundColor: '#86dd75'
  },
  modalWindowHeaderRoleInfo: {
    backgroundColor: '#84bef0'
  },
  modalWindowContent: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#ffffff'
  },
  modalWindowTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: normalize(16),
    lineHeight: normalize(16),
    fontWeight: '400',
    color: '#4c4c4c',
    textAlign: 'center'
  },
  modalWindowTitleTablet: {
    fontSize: normalize(18),
    lineHeight: normalize(18),
  },
  modalWindowTitleThemeLight: {
    color: '#ffffff'
  }
}

// Content Blocks
const SplashScreen = {
  splashScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#808080'
  },
  splashScreenSecurityApp: {
    backgroundColor: '#84bef0'
  },
  splashScreenStaffApp: {
    backgroundColor: '#ff3334'
  },
  splashScreenImage: {
  }
}
const DotNavStyles = {
  dotNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 3,
    borderTopColor: '#f0f0f0'
  },
  dotNavAction: {
  },
  dotNavActionContent: {
    marginLeft: 4,
    marginRight: 4,
    paddingVertical: 16,
    paddingHorizontal: 8
  },
  dotNavDot: {
    width: 16,
    height: 16,
    marginHorizontal: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#aaaaaa',
    backgroundColor: 'transparent'
  },
  dotNavDotStateActive: {
    marginHorizontal: 8,
    backgroundColor: '#aaaaaa'
  }
}

const TabNavStyles = {
  tabNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 3,
    borderTopColor: '#f0f0f0'
  },
  tabNavAction: {
    flex: 1,
    opacity: 0.5
  },
  tabNavActionStateActive: {
    opacity: 1
  },
  tabNavActionContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 8
  },
  tabNavDivider: {
    width: 1,
    height: 32,
    backgroundColor: '#d8d8d8'
  },
  tabNavIcon: {
    fontFamily: 'icons',
    fontSize: normalize(16),
    lineHeight:  normalize(16),
    marginBottom: 8
  },
  tabNavIconTablet: {
    fontSize: normalize(18),
    lineHeight: normalize(18)
  },
  tabNavLabel: {
    fontFamily: 'Montserrat-Regular',
    fontSize: normalize(10),
    lineHeight: normalize(10),
    fontWeight: '400',
    color: '#4c4c4c',
    textAlign: 'center'
  },
  tabNavLabelTablet: {
    fontSize: normalize(12),
    lineHeight: normalize(12)
  }
}

const InfoListStyles = {
  infoList: {
  },
  infoListItem: {
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0'
  },
  infoListItemLast: {
    marginBottom: 0,
    borderWidth: 0,
    borderColor: 'transparent'
  },
  infoListLabel: {
    marginBottom: 8,
    fontFamily: 'Montserrat-Regular',
    fontSize: normalize(10),
    lineHeight: normalize(10),
    fontWeight: '400',
    color: '#aaaaaa',
    textAlign: 'left'
  },
  infoListLabelTablet: {
    fontSize: normalize(12),
    lineHeight: normalize(12)
  },
  infoListData: {
  },
  infoListText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: normalize(14),
    lineHeight: normalize(14),
    fontWeight: '400',
    color: '#4c4c4c',
    textAlign: 'left'
  },
  infoListTextTablet: {
    fontSize: normalize(16),
    lineHeight: normalize(16)
  },
  infoListTextLine: {
    marginBottom: 4
  }
}

const ShiftsStyles = {
  shifts: {
  },
  shiftsGroup: {
    marginBottom: 24
  },
  shiftsGroupHeader: {
    marginBottom: 16
  },
  shiftsGroupTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: normalize(18),
    lineHeight: normalize(18),
    fontWeight: '400',
    color: '#808080',
    textAlign: 'center'
  },
  shiftsGroupTitleTablet: {
    fontSize: normalize(20),
    lineHeight: normalize(20)
  },
  shiftsItem: {
    position: 'relative',
    paddingLeft: 24,
    marginBottom: 16
  },
  shiftsItemLast: {
    marginBottom: 0
  },
  shiftsItemIcon: {
    position: 'absolute',
    zIndex: 2,
    top: 10,
    left: 0,
    backgroundColor: '#ffffff',
    fontFamily: 'icons',
    fontSize: 14,
    lineHeight: 14,
    color: '#0f487a'
  },
  shiftsItemIconTablet: {
    top: 16,
    fontSize: 16,
    lineHeight: 16,
  },
  shiftsItemLine: {
    position: 'absolute',
    zIndex: 1,
    top: 28,
    bottom: -22,
    left: 6,
    width: 1,
    backgroundColor: '#808080'
  },
  shiftsItemLineTablet: {
    top: 36,
    bottom: -28,
    left: 7,
  },
  shiftsItemContent: {
    flex:1,
    padding: 8,
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderColor: '#84bef0',
    borderRadius: 4
  },
  shiftsItemContentTablet: {
    padding: 16,
  },
  shiftsItemTime: {
    marginBottom: 8,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: normalize(14),
    lineHeight: normalize(14),
    fontWeight: '600',
    color: '#4c4c4c'
  },
  shiftsItemTimeTablet: {
    fontSize: normalize(18),
    lineHeight: normalize(18)
  },
  shiftsItemVenue: {
    flexDirection: 'row'
  },
  shiftsItemVenueIcon: {
    marginRight: 8,
    fontFamily: 'icons',
    fontSize: normalize(12),
    lineHeight: normalize(12),
    color: '#808080'
  },
  shiftsItemVenueIconTablet: {
    fontSize: normalize(14),
    lineHeight: normalize(14)
  },
  shiftsItemVenueName: {
    fontFamily: 'Montserrat-Regular',
    fontSize: normalize(14),
    lineHeight: normalize(14),
    fontWeight: '400',
    color: '#808080'
  },
  shiftsItemVenueNameTablet: {
    fontSize: normalize(16),
    lineHeight: normalize(16)
  },
  shiftsActions: {
    alignItems: 'center'
  },
  shiftsTextPlaceholder: {
    fontFamily: 'Montserrat-Regular',
    fontSize: normalize(16),
    lineHeight: normalize(16),
    fontWeight: '400',
    color: '#808080',
    textAlign: 'center'
  },
  shiftsTextPlaceholderTablet: {
    fontSize: normalize(18),
    lineHeight: normalize(18)
  }
}

const PaymentsStyles = {
  payments: {
  },
  paymentsList: {
    marginBottom: 24
  },
  paymentsItem: {
    marginBottom: 16
  },
  paymentsItemLast: {
    marginBottom: 0
  },
  paymentsActions: {
    alignItems: 'center'
  }
}

module.exports = StyleSheet.create({
  // Layout Blocks
  ...MainStyles,
  ...ServiceStyles,
  ...ProfileStyles,
  ...FormStyles,
  ...RotaStyles,
  ...PaymentsStyles,

  // Common Blocks
  ...SwitchStyles,
  ...CheckboxStyles,
  ...TextInputStyles,
  ...ButtonStyles,
  ...ActionStyles,
  ...MessageStyles,
  ...NoteStyles,
  ...userSummary,
  ...InfoCardStyles,
  ...ModalStyles,

  // Content Blocks
  ...SplashScreen,
  ...DotNavStyles,
  ...TabNavStyles,
  ...InfoListStyles,
  ...ShiftsStyles
});
