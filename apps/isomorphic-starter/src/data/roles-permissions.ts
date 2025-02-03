import { ROLES } from "@/config/constants";
import { avatarIds } from "@core/utils/get-avatar";
import { getRandomArrayElement } from "@core/utils/get-random-array-element";

export const users = [
  {
    id: 1,
    role: ROLES.Administrator,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`
  },
  {
    id: 2,
    role: ROLES.Administrator,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`
  },
  {
    id: 3,
    role: ROLES.Administrator,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`
  },
  {
    id: 4,
    role: ROLES.Administrator,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`
  },
  {
    id: 5,
    role: ROLES.Administrator,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`
  },
  {
    id: 6,
    role: ROLES.Administrator,
    avatar: `https://isomorphic-furyroad.s3.amazonaws.com/public/avatars-blur/avatar-${getRandomArrayElement(
      avatarIds
    )}.webp`
  }
];

export const rolesList = [
  {
    name: ROLES.Administrator,
    color: "#2465FF",
    users
  },
  {
    name: ROLES.Administrator,
    color: "#2465FF",
    users
  },
  {
    name: ROLES.Administrator,
    color: "#2465FF",
    users
  },
  {
    name: ROLES.Agent,
    color: "#11A849",
    users
  }
];

export const roleActions = [
  {
    id: 1,
    name: "Add User"
  },
  {
    id: 2,
    name: "Rename"
  },
  {
    id: 3,
    name: "Remove Role"
  }
];
