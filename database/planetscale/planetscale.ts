import { ExecutedQuery, connect } from "@planetscale/database";

const config = {
  host: "aws.connect.psdb.cloud",
  username: "5xptoptmzmzvdhqouls1",
  password: "pscale_pw_r1l4i2OmcRqDLp9pjQQHzc0UdlRDTz4eIm2H8fQrat8",
};

const planetscale = connect(config);

export const SQLquery = async (
  type: string,
  columnName?: string
): Promise<{
  success: boolean;
  message: string;
  result: ExecutedQuery | null;
}> => {
  if (!type) return { success: false, message: "Invalid Query", result: null };

  //   const query =
  const query = "select * from followers;";
  const result = await planetscale.execute(query);
  return { success: true, message: "successful", result };
};
