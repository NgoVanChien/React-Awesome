import React from "react";
import useUser from "../useUser";

export default function Navigator() {
  //   const [user, setUser] = useState({});

  //   useEffect(() => {
  //     getUser().then((res) => {
  //       setUser(res.data);
  //     });
  //   }, []);

  const user = useUser({});

  return <div>Navigator {user?.name}</div>;
}

// Edit : useCustom Hook
