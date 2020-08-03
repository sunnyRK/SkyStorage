import { createPow } from "@textile/powergate-client";
import * as System from 'slate-react-system'
import web3 from "../../../config/web3";
import {getFilecoinInstance} from "../../../config/contractinstance";
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

export const _uploadToFilecoin = async (data) => {

  const accounts = await web3.eth.getAccounts();

  const file = data.file.files[0];
  var buffer = [];
  const getByteArray = async () =>
    new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = function (e) {
        if (e.target.readyState == FileReader.DONE) {
          buffer = new Uint8Array(e.target.result);
        }
        resolve();
      };
      reader.readAsArrayBuffer(file);
    });
  await getByteArray();

    console.log(userToken);

  const { cid } = await PG.ffs.stage(buffer);
  console.log(cid);
  const { jobId } = await PG.ffs.pushStorageConfig(cid);
  const cancel = PG.ffs.watchJobs((job) => {
    console.log(job);
  }, jobId);
  const bytes = await PG.ffs.get(cid)
  console.log(bytes)

  await getFilecoinInstance().methods.UploadNewIpfsHash(cid).send({
    from: accounts[0]
  });
};
