async function sendRequest(
  {
    method = "GET",
    url = "",
    base = "http://localhost:8080",
    mode = "cors",
    credentials = "include",
  },
  data = {}
) {
  const response = await fetch(`${base}${url}`, {
    method,
    mode,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    credentials,
    body: JSON.stringify(data),
  });
  return response.json();
}

function postLogin({ username, userpassword }) {
  return sendRequest(
    { method: "POST", url: "/auth" },
    { username, userpassword }
  );
}

function getAccount({ username }) {
  return sendRequest(
    {
      method: "POST",
      url: "/account",
    },
    { username }
  );
}

function postAccount({ username }) {
  return sendRequest(
    {
      method: "POST",
      url: "/account/edit",
    },
    { username }
  );
}

export { postLogin, getAccount, postAccount };
