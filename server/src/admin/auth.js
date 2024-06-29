import * as bcrypt from "bcrypt";
export const createAdmin = async (adminInfo) => {
  const salt = await bcrypt.genSalt(Number(process.env.salt));
  const hashpassword = await bcrypt.hash(adminInfo.password, salt);
  adminInfo.password = hashpassword;
  const newUser = new adminadminModel(adminInfo);
  return newUser.save();
};
