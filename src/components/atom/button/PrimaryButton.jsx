import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

//styled()で共通部分のプロパティを与えることができる
//PrimaryButton固有のプロパティを記述するだけでよい
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
