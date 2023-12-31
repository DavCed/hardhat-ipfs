import { create } from "ipfs-core";
import student from "../student.json" assert { type: "json" };

const ipfsNode = await create();

const studentJSON = JSON.stringify(student);
const file = await ipfsNode.add(studentJSON);

console.log(`Added File: ${file.cid}`);

const info = [];
for await (const chunk of ipfsNode.cat(file.cid)) info.push(chunk);
console.log(JSON.parse(info));

ipfsNode.stop();
