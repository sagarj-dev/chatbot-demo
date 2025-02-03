import { routes } from "@/config/routes";
import { DUMMY_ID } from "@/config/constants";
import {
  PiShoppingCartDuotone,
  PiHeadsetDuotone,
  PiPackageDuotone,
  PiChartBarDuotone,
  PiCurrencyDollarDuotone,
  PiSquaresFourDuotone,
  PiGridFourDuotone,
  PiFeatherDuotone,
  PiChartLineUpDuotone,
  PiMapPinLineDuotone,
  PiUserGearDuotone,
  PiBellSimpleRingingDuotone,
  PiUserDuotone,
  PiEnvelopeSimpleOpenDuotone,
  PiStepsDuotone,
  PiCreditCardDuotone,
  PiTableDuotone,
  PiBrowserDuotone,
  PiHourglassSimpleDuotone,
  PiUserCircleDuotone,
  PiShootingStarDuotone,
  PiRocketLaunchDuotone,
  PiFolderLockDuotone,
  PiBinocularsDuotone,
  PiHammerDuotone,
  PiNoteBlankDuotone,
  PiUserPlusDuotone,
  PiShieldCheckDuotone,
  PiLockKeyDuotone,
  PiChatCenteredDotsDuotone,
  PiCalendarPlusDuotone,
  PiEnvelopeDuotone,
  PiCurrencyCircleDollarDuotone,
  PiBriefcaseDuotone,
  PiHouseLineDuotone,
  PiAirplaneTiltDuotone,
  PiFolder,
  PiCaretCircleUpDownDuotone,
  PiListNumbersDuotone,
  PiCoinDuotone,
  PiCalendarDuotone,
  PiShapesDuotone,
  PiNewspaperClippingDuotone,
  PiListDashesFill,
  PiCodesandboxLogoLight,
  PiChatCenteredDots,
  PiUsersThreeBold,
  PiFolderLockBold
} from "react-icons/pi";

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  // label start
  {
    name: "Overview"
  },
  // label end
  {
    name: "Dashboard",
    href: "/",
    icon: <PiListDashesFill />,
    badge: ""
  },
  // label end
  {
    name: "Project Management",
    href: "#",
    icon: <PiCodesandboxLogoLight />,
    dropdownItems: [
      {
        name: "Create Project",
        href: "/create-project",
        badge: ""
      },
      {
        name: "All Project",
        href: "/all-projects"
      }
    ]
  },
  {
    name: "Feedback",
    href: "/feedback",
    icon: <PiChatCenteredDots />
  },
  {
    name: "User Management",
    href: "/user-management",
    icon: <PiUsersThreeBold />
  },
  {
    name: "Role Management",
    href: "/role-management",
    icon: <PiFolderLockBold />
  },
  {
    name: "Support",
    href: "/support",
    icon: <PiHeadsetDuotone />
  }
];
