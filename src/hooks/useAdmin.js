import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(true);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://sheltered-castle-28994.herokuapp.com/user/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
        //   setAdminLoading(false);
        });
    }
  }, [user]);

  return [admin];
};

export default useAdmin;
