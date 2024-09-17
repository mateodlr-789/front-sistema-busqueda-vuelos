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
  | "air-plane";

export interface IconProps {
  className: string;
  type: IKind;
  onClick?: () => void;
}
