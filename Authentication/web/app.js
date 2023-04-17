// // Add a request interceptor
// axios.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// axios.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );
class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:4000/",
      timeout: 10000,
    });
    this.refreshTokenRequest = null;
    this.instance.interceptors.request.use(
      (config) => {
        console.log(config);
        const access_token = localStorage.getItem("access_token");
        if (access_token) {
          config.headers.Authorization = `Bearer ${access_token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    this.instance.interceptors.response.use(
      (config) => config.data,
      (error) => {
        if (
          error.response.status === 401 &&
          error.response.data.name === "EXPIRED_ACCESS_TOKEN"
        ) {
          this.refreshTokenRequest = this.refreshTokenRequest
            ? this.refreshTokenRequest
            : refreshToken().finally(() => {
                this.refreshTokenRequest = null;
              });
          return this.refreshTokenRequest
            .then((access_token) => {
              error.response.config.headers.Authorization = `Bearer ${access_token}`;
              return this.instance(error.response.config);
            })
            .catch((refreshTokenerror) => {
              throw refreshTokenerror; // Logic code tương ứng với 118 -> 120
            });
        }
        return Promise.reject(error);
      }
    );
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, body) {
    return this.instance.post(url, body);
  }
}

const http = new Http();

const fetchProfile = () => {
  http
    .get("profile")
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

const fetchProducts = () => {
  http
    .get("products")
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};

// const refreshToken = async () => {
//   const refresh_token = localStorage.getItem("refresh_token");
//   try {
//     const res = await http.post("refresh_token", {
//       refresh_token,
//     });
//     const { access_token } = res.data;
//     localStorage.setItem("access_token", access_token);
//     return access_token;
const refreshToken = async () => {
  const refresh_token = localStorage.getItem("refresh_token");
  try {
    const res = await http.post("refresh-token", {
      refresh_token,
    });
    const { access_token } = res.data;
    localStorage.setItem("access_token", access_token);
    return access_token;
  } catch (error) {
    // Trường hợp Refresh_Token Hết Hạn
    localStorage.clear();
    throw error.response;
  }
};

document.getElementById("login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  http
    .post("login", {
      username,
      password,
    })
    .then((res) => {
      // console.log(res);
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
    })
    .catch((error) => {
      console.log(error);
    });
});

document
  .getElementById("btn-get-profile")
  .addEventListener("click", (event) => {
    fetchProfile();
  });

document
  .getElementById("btn-get-products")
  .addEventListener("click", (event) => {
    fetchProducts();
  });

document.getElementById("btn-get-both").addEventListener("click", (event) => {
  fetchProfile();
  fetchProducts();
});

document
  .getElementById("btn-refresh-token")
  .addEventListener("click", (event) => {
    refreshToken();
  });

// class Http {
//   constructor() {
//     this.instance = axios.create({
//       baseURL: "http://localhost:4000/",
//       timeout: 10000,
//     });
//     this.refreshTokenRequest = null;
//     this.instance.interceptors.request.use(
//       (config) => {
//         const access_token = localStorage.getItem("access_token");
//         if (access_token) {
//           config.headers.Authorization = `Bearer ${access_token}`;
//         }
//         return config;
//       },
//       (error) => Promise.reject(error)
//     );
//     this.instance.interceptors.response.use(
//       (config) => config.data,
//       (error) => {
//         if (
//           error.response.status === 401 &&
//           error.response.data.name === "EXPIRED_ACCESS_TOKEN"
//         ) {
//           this.refreshTokenRequest = this.refreshTokenRequest
//             ? this.refreshTokenRequest
//             : refreshToken().finally(() => {
//                 this.refreshTokenRequest = null;
//               });
//           return this.refreshTokenRequest
//             .then((access_token) => {
//               this.instance(error.response.config);
//             })
//             .catch((refreshTokenerror) => {
//               throw refreshTokenerror;
//             });
//         }
//         return Promise.reject(error);
//       }
//     );
//   }

//   get(url) {
//     return this.instance.get(url);
//   }

//   post(url, body) {
//     return this.instance.post(url, body);
//   }
// }

// const http = new Http();

// const fetchProfile = () => {
//   http
//     .get("profile")
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// const fetchProducts = () => {
//   http
//     .get("products")
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// const refreshToken = async () => {
//   const refresh_token = localStorage.getItem("refresh_token");
//   try {
//     const res = await http.post("refresh-token", {
//       refresh_token,
//     });
//     const { access_token } = res.data;
//     localStorage.setItem("access_token", access_token);
//     return access_token;
//   } catch (error) {
//     localStorage.clear();
//     throw error.response;
//   }
// };

// document.getElementById("login-form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;
//   http
//     .post("login", {
//       username,
//       password,
//     })
//     .then((res) => {
//       localStorage.setItem("access_token", res.data.access_token);
//       localStorage.setItem("refresh_token", res.data.refresh_token);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// document
//   .getElementById("btn-get-profile")
//   .addEventListener("click", (event) => {
//     fetchProfile();
//   });

// document
//   .getElementById("btn-get-products")
//   .addEventListener("click", (event) => {
//     fetchProducts();
//   });

// document.getElementById("btn-get-both").addEventListener("click", (event) => {
//   fetchProfile();
//   fetchProducts();
// });

// document
//   .getElementById("btn-refresh-token")
//   .addEventListener("click", (event) => {
//     refreshToken();
//   });
