export type IKind =
  | "row-right"
  | "row-left"
  | "row-up"
  | "row-down"
  | "people"
  | "ear-phones-alt"
  | "chart"
  | "phone"
  | "wrench"
  | "air-plane"
  | "moon"
  | "sun";

export interface IconProps {
  className: string;
  type: IKind;
  onClick?: () => void;
}
