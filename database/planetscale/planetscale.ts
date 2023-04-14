/* eslint-disable turbo/no-undeclared-env-vars */
import { ExecutedQuery, connect } from "@planetscale/database";

const config = {
  host: process.env.PLANETSCALE_DATABASE_HOST,
  username: process.env.PLANETSCALE_DATABASE_USERNAME,
  password: process.env.PLANETSCALE_DATABASE_PASSWORD,
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
