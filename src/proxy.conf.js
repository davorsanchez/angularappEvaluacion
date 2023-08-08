const PROXY_CONFIG = [
  {
    context: [
      "/test", "/usuario",
    ],
    target: "https://localhost:7071",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
