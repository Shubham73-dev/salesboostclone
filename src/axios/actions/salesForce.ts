import axios from "axios";

import { Props } from "@/axios/interfaces";

export const salesForce = async (props: Props) => {
  const url = `bff/api/v1/connector/${props?.url ?? ""}`;
  try {
    return await axios({
      ...props,
      url,
    });
  } catch (error) {
    console.error("Salesforce API error:", error);
    throw error;
  }
};
