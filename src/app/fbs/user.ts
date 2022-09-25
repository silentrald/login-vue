// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class User {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):User {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsUser(bb:flatbuffers.ByteBuffer, obj?:User):User {
  return (obj || new User()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsUser(bb:flatbuffers.ByteBuffer, obj?:User):User {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new User()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id():string|null
id(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
id(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

username():string|null
username(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
username(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

static startUser(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, idOffset, 0);
}

static addUsername(builder:flatbuffers.Builder, usernameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, usernameOffset, 0);
}

static endUser(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createUser(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset, usernameOffset:flatbuffers.Offset):flatbuffers.Offset {
  User.startUser(builder);
  User.addId(builder, idOffset);
  User.addUsername(builder, usernameOffset);
  return User.endUser(builder);
}
}
