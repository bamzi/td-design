import { NavigationProp, RouteProp } from '@react-navigation/native';

export type ParamList = {
  Homepage: undefined;
  IconfontDemo: undefined;
  FormDemo: undefined;
  TabsDemo: undefined;
  ModalPickerDemo: undefined;
  ModalAlertDemo: undefined;
  ModalConfirmDemo: undefined;
  ProgressDemo: undefined;
  ModalPromptDemo: undefined;
  ModalTipDemo: undefined;
  StepperDemo: undefined;
  DarkThemeDemo: undefined;
  ButtonDemo: undefined;
  SwitchDemo: undefined;
  InputDemo: undefined;
  ActionSheetDemo: undefined;
  CardDemo: undefined;
  BadgeDemo: undefined;
  AccordionDemo: undefined;
  ModalDemo: undefined;
  IconDemo: undefined;
  DividerDemo: undefined;
  ImagePickerDemo: undefined;
  TagDemo: undefined;
  ModalDatePickerDemo: undefined;
  HeaderDemo: undefined;
  SearchBarDemo: undefined;
  SliderDemo: undefined;
  ImageDemo: undefined;
  ListItemDemo: undefined;
  AvatarDemo: undefined;
  RatingDemo: undefined;
  ShareDemo: undefined;
  EmptyDemo: undefined;
  NoticeBarDemo: undefined;
  CheckableDemo: undefined;
  ToastDemo: undefined;
  SwiperDemo: undefined;
  FloatButtonDemo: undefined;
  SwipeRowDemo: undefined;
  AutoCompleteDemo: undefined;
  CollapseTextDemo: undefined;
  TableDemo: undefined;
  CalendarDemo: undefined;
  FlowDemo: undefined;
  NumberKeyboardDemo: undefined;
  PullRefreshDemo: undefined;
  WhiteSpaceDemo: undefined;
  ButtonGroupDemo: undefined;
  WingBlankDemo: undefined;
  BoxDemo: undefined;
  TextDemo: undefined;
  PaginationDemo: undefined;
  PasswordDemo: undefined;
  TimeLineDemo: undefined;
  TreeDemo: undefined;
  CountDownDemo: undefined;
  MenuDemo: undefined;
  TooltipDemo: undefined;
  IndicatorDemo: undefined;
};
export interface ScreenProps {
  route: RouteProp<ParamList, keyof ParamList>;
  navigation: NavigationProp<ParamList, keyof ParamList>;
}
