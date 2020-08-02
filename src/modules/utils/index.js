import { createPow } from "@textile/powergate-client";

const PG = createPow({ host: "http://0.0.0.0:6002" });
let userToken = null;

export const PowerGate = PG;

export const _handleCreateToken = async () => {
  const FFS = await PG.ffs.create();
  const token = FFS.token ? FFS.token : null;
  return token;
};

export const _setToken = (token) => {
  userToken = token;
  PG.setToken(token);
}

export const _handleInfo = async (token) => {
  const { addrsList } = await PG.ffs.addrs();
  const { info } = await PG.ffs.info();
  return { addrsList, info };
}