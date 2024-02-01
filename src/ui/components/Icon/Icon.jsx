import React from 'react';
import cn from 'classnames';
import './Icon.scss';

import { ReactComponent as ArrowBottom } from './content/arrow-bottom.svg';
import { ReactComponent as ArrowForward } from './content/arrow-forward.svg';
import { ReactComponent as ArrowLeft } from './content/arrow-left.svg';
import { ReactComponent as ArrowLeftCurved } from './content/arrow-left-curved.svg';
import { ReactComponent as ArrowRedo } from './content/arrow-redo.svg';
import { ReactComponent as ArrowTop } from './content/arrow-top.svg';
import { ReactComponent as ArrowUndo } from './content/arrow-undo.svg';
import { ReactComponent as ArrowDiagonals } from './content/arrows-diagonals.svg';

import { ReactComponent as ChevronBottom } from './content/chevron-bottom.svg';
import { ReactComponent as ChevronLeft } from './content/chevron-left.svg';
import { ReactComponent as ChevronRight } from './content/chevron-right.svg';
import { ReactComponent as ChevronTop } from './content/chevron-top.svg';

import { ReactComponent as ChevronsBottom } from './content/chevrons-bottom.svg';
import { ReactComponent as ChevronsLeft } from './content/chevrons-left.svg';
import { ReactComponent as ChevronsRight } from './content/chevrons-right.svg';
import { ReactComponent as ChevronsTop } from './content/chevrons-top.svg';

import { ReactComponent as CircleChevronBottom } from './content/circle-chevron-bottom.svg';
import { ReactComponent as CircleChevronLeft } from './content/circle-chevron-left.svg';
import { ReactComponent as CircleChevronRight } from './content/circle-chevron-right.svg';
import { ReactComponent as CircleChevronTop } from './content/circle-chevron-top.svg';

import { ReactComponent as RefreshCCW } from './content/refresh-ccw.svg';
import { ReactComponent as RotateCCW } from './content/rotate-ccw.svg';
import { ReactComponent as RotateCW } from './content/rotate-cw.svg';

import { ReactComponent as Icon360 } from './content/360.svg';
import { ReactComponent as Bag } from './content/bag.svg';
import { ReactComponent as BarChart } from './content/bar-chart.svg';
import { ReactComponent as Basket } from './content/basket.svg';
import { ReactComponent as Bell } from './content/bell.svg';
import { ReactComponent as Book } from './content/book.svg';
import { ReactComponent as Box } from './content/box.svg';
import { ReactComponent as Browser } from './content/browser.svg';
import { ReactComponent as Brush } from './content/brush.svg';
import { ReactComponent as Calculator } from './content/calculator.svg';
import { ReactComponent as CallPhone } from './content/call-phone.svg';
import { ReactComponent as Camera } from './content/camera.svg';
import { ReactComponent as Cart } from './content/cart.svg';
import { ReactComponent as Case } from './content/case.svg';

import { ReactComponent as CalendarChecked } from './content/calendar-checked.svg';
import { ReactComponent as CalendarCreate } from './content/calendar-create.svg';
import { ReactComponent as CalendarDates } from './content/calendar-dates.svg';
import { ReactComponent as CalendarDelete } from './content/calendar-delete.svg';
import { ReactComponent as CalendarMinus } from './content/calendar-minus.svg';
import { ReactComponent as CalendarPlus } from './content/calendar-plus.svg';
import { ReactComponent as Calendar } from './content/calendar.svg';

import { ReactComponent as CheckMark } from './content/check-mark.svg';
import { ReactComponent as CheckMarks } from './content/check-marks.svg';
import { ReactComponent as CircleBlock } from './content/circle-block.svg';
import { ReactComponent as CircleChecked } from './content/circle-checked.svg';
import { ReactComponent as CircleMinus } from './content/circle-minus.svg';
import { ReactComponent as CirclePlus } from './content/circle-plus.svg';
import { ReactComponent as CloudDownload } from './content/cloud-download.svg';
import { ReactComponent as CloudUpload } from './content/cloud-upload.svg';
import { ReactComponent as Cloud } from './content/cloud.svg';

import { ReactComponent as CommentText } from './content/comment-text.svg';
import { ReactComponent as Comment } from './content/comment.svg';
import { ReactComponent as Copy } from './content/copy.svg';
import { ReactComponent as Coupon } from './content/coupon.svg';
import { ReactComponent as CreditCardAdd } from './content/creditcard-add.svg';
import { ReactComponent as Cup } from './content/cup.svg';
import { ReactComponent as Cut } from './content/cut.svg';

import { ReactComponent as AlertCircle } from './content/alert-circle.svg';
import { ReactComponent as AlertTriangle } from './content/alert-triangle.svg';

import { ReactComponent as Dashboard } from './content/dashboard.svg';
import { ReactComponent as DataBase } from './content/database.svg';
import { ReactComponent as Delete } from './content/delete.svg';
import { ReactComponent as Delivery } from './content/delivery.svg';
import { ReactComponent as Download } from './content/download.svg';
import { ReactComponent as Drop } from './content/drop.svg';
import { ReactComponent as ExternalLink } from './content/external-link.svg';
import { ReactComponent as EyeNo } from './content/eye-no.svg';
import { ReactComponent as Eye } from './content/eye.svg';
import { ReactComponent as Facebook } from './content/facebook.svg';
import { ReactComponent as FileCreate } from './content/file-create.svg';
import { ReactComponent as File } from './content/file.svg';
import { ReactComponent as Filter } from './content/filter.svg';
import { ReactComponent as Flame } from './content/flame.svg';
import { ReactComponent as FolderCreate } from './content/folder-create.svg';
import { ReactComponent as Folder } from './content/folder.svg';
import { ReactComponent as Gift } from './content/globe.svg';
import { ReactComponent as Google } from './content/google.svg';
import { ReactComponent as Heart } from './content/heart.svg';
import { ReactComponent as Home } from './content/home.svg';

import { ReactComponent as Image } from './content/image.svg';
import { ReactComponent as Inbox } from './content/inbox.svg';
import { ReactComponent as Info } from './content/info.svg';
import { ReactComponent as Instagram } from './content/instagram.svg';
import { ReactComponent as IPad } from './content/iPad.svg';
import { ReactComponent as Key } from './content/key.svg';
import { ReactComponent as Laptop } from './content/laptop.svg';
import { ReactComponent as Layers } from './content/layers.svg';
import { ReactComponent as LightBulb } from './content/lightbulb.svg';
import { ReactComponent as Lightning } from './content/lightning.svg';
import { ReactComponent as Link } from './content/link.svg';
import { ReactComponent as List } from './content/list.svg';
import { ReactComponent as Lock } from './content/lock.svg';
import { ReactComponent as Mail } from './content/mail.svg';
import { ReactComponent as Map } from './content/map.svg';
import { ReactComponent as Maximize } from './content/maximize.svg';
import { ReactComponent as MenuDots } from './content/menu-dots.svg';
import { ReactComponent as Menu } from './content/menu.svg';

import { ReactComponent as MicNo } from './content/mic-no.svg';
import { ReactComponent as Mic } from './content/mic.svg';
import { ReactComponent as Mobile } from './content/mobile.svg';
import { ReactComponent as Monitor } from './content/monitor.svg';
import { ReactComponent as Moon } from './content/moon.svg';
import { ReactComponent as Newspaper } from './content/newspaper.svg';
import { ReactComponent as NoteText } from './content/note-text.svg';
import { ReactComponent as Paperclip } from './content/paperclip.svg';
import { ReactComponent as PencilCreate } from './content/pencil-create.svg';
import { ReactComponent as PencilEdit } from './content/pencil-edit.svg';
import { ReactComponent as PinAdd } from './content/pin-add.svg';
import { ReactComponent as PinRound } from './content/pin-round.svg';
import { ReactComponent as Pin } from './content/pin.svg';
import { ReactComponent as Plus } from './content/plus.svg';
import { ReactComponent as Printer } from './content/printer.svg';
import { ReactComponent as Pulse } from './content/pulse.svg';

import { ReactComponent as QuestionCircle } from './content/question-circle.svg';
import { ReactComponent as Question } from './content/question.svg';
import { ReactComponent as Rocket } from './content/rocket.svg';
import { ReactComponent as Route } from './content/route.svg';
import { ReactComponent as Sad } from './content/sad.svg';
import { ReactComponent as Search } from './content/search.svg';
import { ReactComponent as Send } from './content/send.svg';
import { ReactComponent as Server } from './content/server.svg';
import { ReactComponent as Settings } from './content/settings.svg';
import { ReactComponent as ShareArrow } from './content/share-arrow.svg';
import { ReactComponent as Share } from './content/share.svg';
import { ReactComponent as ShieldLock } from './content/shield-lock.svg';
import { ReactComponent as ShieldOk } from './content/shield-ok.svg';
import { ReactComponent as Smiled } from './content/smiled.svg';
import { ReactComponent as Star } from './content/star.svg';
import { ReactComponent as Sun } from './content/sun.svg';

import { ReactComponent as Tag } from './content/tag.svg';
import { ReactComponent as ThumbsDown } from './content/thumbs-down.svg';
import { ReactComponent as ThumbsUp } from './content/thumbs-up.svg';
import { ReactComponent as TimeHistory } from './content/time-history.svg';
import { ReactComponent as Time } from './content/time.svg';
import { ReactComponent as Timer } from './content/timer.svg';
import { ReactComponent as Trash } from './content/trash.svg';
import { ReactComponent as Twitter } from './content/twitter.svg';
import { ReactComponent as Unlock } from './content/unlock.svg';
import { ReactComponent as User } from './content/user.svg';
import { ReactComponent as Verified } from './content/verified.svg';
import { ReactComponent as Video } from './content/video.svg';
import { ReactComponent as Wallet } from './content/wallet.svg';
import { ReactComponent as Youtube } from './content/youtube.svg';
import { ReactComponent as ZoomIn } from './content/zoom-in.svg';
import { ReactComponent as ZoomOut } from './content/zoom-out.svg';
import { ReactComponent as GitHub } from './content/github.svg';

const iconsData = [
  { label: "arrow-bottom", component: ArrowBottom },
  { label: "arrow-forward", component: ArrowForward },
  { label: "arrow-left", component: ArrowLeft },
  { label: "arrow-left-curved", component: ArrowLeftCurved },
  { label: "arrow-redo", component: ArrowRedo },
  { label: "arrow-top", component: ArrowTop },
  { label: "arrow-undo", component: ArrowUndo },
  { label: "arrow-diagonals", component: ArrowDiagonals },

  { label: "chevron-bottom", component: ChevronBottom },
  { label: "chevron-left", component: ChevronLeft },
  { label: "chevron-right", component: ChevronRight },
  { label: "chevron-top", component: ChevronTop },

  { label: "chevrons-bottom", component: ChevronsBottom },
  { label: "chevrons-left", component: ChevronsLeft },
  { label: "chevrons-right", component: ChevronsRight },
  { label: "chevrons-top", component: ChevronsTop },

  { label: "circle-chevron-bottom", component: CircleChevronBottom },
  { label: "circle-chevron-left", component: CircleChevronLeft },
  { label: "circle-chevron-right", component: CircleChevronRight },
  { label: "circle-chevron-top", component: CircleChevronTop },

  { label: "rotate-ccw", component: RotateCCW },
  { label: "rotate-cw", component: RotateCW },
  { label: "refresh-ccw", component: RefreshCCW },

  { label: "360", component: Icon360 },
  { label: "bag", component: Bag },
  { label: "bar-chart", component: BarChart },
  { label: "basket", component: Basket },
  { label: "bell", component: Bell },
  { label: "book", component: Book },
  { label: "box", component: Box },
  { label: "browser", component: Browser },
  { label: "brush", component: Brush },
  { label: "calculator", component: Calculator },
  { label: "call-phone", component: CallPhone },
  { label: "camera", component: Camera },
  { label: "cart", component: Cart },
  { label: "case", component: Case },

  { label: "calendar-checked", component: CalendarChecked },
  { label: "calendar-create", component: CalendarCreate },
  { label: "calendar-dates", component: CalendarDates },
  { label: "calendar-delete", component: CalendarDelete },
  { label: "calendar-minus", component: CalendarMinus },
  { label: "calendar-plus", component: CalendarPlus },
  { label: "calendar", component: Calendar },

  { label: "alert-circle", component: AlertCircle },
  { label: "alert-triangle", component: AlertTriangle },

  { label: "check-mark", component: CheckMark },
  { label: "check-marks", component: CheckMarks },
  { label: "circle-block", component: CircleBlock },
  { label: "circle-checked", component: CircleChecked },
  { label: "circle-minus", component: CircleMinus },
  { label: "circle-plus", component: CirclePlus },
  { label: "cloud-download", component: CloudDownload },
  { label: "cloud-upload", component: CloudUpload },
  { label: "cloud", component: Cloud },
  { label: "comment-text", component: CommentText },
  { label: "comment", component: Comment },
  { label: "copy", component: Copy },
  { label: "coupon", component: Coupon },
  { label: "credit-card-add", component: CreditCardAdd },
  { label: "cup", component: Cup },
  { label: "cut", component: Cut },
  { label: "dashboard", component: Dashboard },
  { label: "database", component: DataBase },
  { label: "delete", component: Delete },
  { label: "delivery", component: Delivery },
  { label: "download", component: Download },
  { label: "drop", component: Drop },
  { label: "external-link", component: ExternalLink },
  { label: "eye-no", component: EyeNo },
  { label: "eye", component: Eye },
  { label: "facebook", component: Facebook },
  { label: "file-create", component: FileCreate },
  { label: "file", component: File },
  { label: "filter", component: Filter },
  { label: "flame", component: Flame },
  { label: "folder-create", component: FolderCreate },
  { label: "folder", component: Folder },
  { label: "gift", component: Gift },
  { label: "google", component: Google },
  { label: "heart", component: Heart },
  { label: "home", component: Home },
  { label: "image", component: Image },
  { label: "inbox", component: Inbox },
  { label: "info", component: Info },
  { label: "instagram", component: Instagram },
  { label: "iPad", component: IPad },
  { label: "key", component: Key },
  { label: "laptop", component: Laptop },
  { label: "layers", component: Layers },
  { label: "lightbulb", component: LightBulb },
  { label: "lightning", component: Lightning },
  { label: "link", component: Link },
  { label: "list", component: List },
  { label: "lock", component: Lock },
  { label: "mail", component: Mail },
  { label: "map", component: Map },
  { label: "maximize", component: Maximize },
  { label: "menu-dots", component: MenuDots },
  { label: "menu", component: Menu },
  { label: "mic-no", component: MicNo },
  { label: "mic", component: Mic },
  { label: "mobile", component: Mobile },
  { label: "monitor", component: Monitor },
  { label: "moon", component: Moon },
  { label: "newspaper", component: Newspaper },
  { label: "note-text", component: NoteText },
  { label: "paperclip", component: Paperclip },
  { label: "pencil-create", component: PencilCreate },
  { label: "pencil-edit", component: PencilEdit },
  { label: "pin-add", component: PinAdd },
  { label: "pin-round", component: PinRound },
  { label: "pin", component: Pin },
  { label: "plus", component: Plus },
  { label: "printer", component: Printer },
  { label: "pulse", component: Pulse },
  { label: "question-circle", component: QuestionCircle },
  { label: "question", component: Question },
  { label: "rocket", component: Rocket },
  { label: "route", component: Route },
  { label: "sad", component: Sad },
  { label: "search", component: Search },
  { label: "send", component: Send },
  { label: "server", component: Server },
  { label: "settings", component: Settings },
  { label: "share-arrow", component: ShareArrow },
  { label: "share", component: Share },
  { label: "shield-lock", component: ShieldLock },
  { label: "shield-ok", component: ShieldOk },
  { label: "smiled", component: Smiled },
  { label: "star", component: Star },
  { label: "sun", component: Sun },
  { label: "tag", component: Tag },
  { label: "thumbs-down", component: ThumbsDown },
  { label: "thumbs-up", component: ThumbsUp },
  { label: "time-history", component: TimeHistory },
  { label: "time", component: Time },
  { label: "timer", component: Timer },
  { label: "trash", component: Trash },
  { label: "twitter", component: Twitter },
  { label: "unlock", component: Unlock },
  { label: "user", component: User },
  { label: "verified", component: Verified },
  { label: "video", component: Video },
  { label: "wallet", component: Wallet },
  { label: "youtube", component: Youtube },
  { label: "zoom-in", component: ZoomIn },
  { label: "zoom-out", component: ZoomOut },
  { label: "github", component: GitHub },
];

const Icon = ({ content, ...props }) => {
  let icon = '';

  const res = iconsData.filter(icon => icon.label === content)[0];
  if (!res) return null;

  icon = <SvgIcon Component={res.component} {...props} />;
  if (!icon) return null;

  return icon;
};

export default Icon;

const SvgIcon = ({ Component, ...props }) => {
  const { content, mix } = props;
  return (
    <Component
      className={cn('svg-icon', content && `svg-icon_content_${content}`, mix)}
    />
  )
};

export { iconsData };
