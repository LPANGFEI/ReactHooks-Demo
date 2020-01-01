import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

import GithubContext from "../../context/github/githubContext";

// 无状态组件
const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      // 调用样式，在外部定义
      <div style={userStyle}>
        {/* 组件遍历 */}
        {users.map(user => (
          // 嵌套组件
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    );
  }
};

// 定义样式
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default Users;
