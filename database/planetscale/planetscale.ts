import { ExecutedQuery, connect } from "@planetscale/database";

const config = {
  username: "ri8y80v04b6ch4yko1va",
  host: "aws.connect.psdb.cloud",
  password: "pscale_pw_f64OoinLzuAI1uPqB0F0Ply7sV2mKZ2igjVtmrLqhQG",
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
  const query =
    type === "INSERT"
      ? `${type} INTO followers (userId, followerId) VALUES ('user1', 'follower1'), ('user2', 'follower2')`
      : `${type} ${columnName || "*"} from followers`;
  const result = await planetscale.execute(query);
  return { success: true, message: "successful", result };
};
