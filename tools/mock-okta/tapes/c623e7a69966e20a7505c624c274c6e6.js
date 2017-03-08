var path = require("path");

/**
 * GET /api/v1/groups/00gltfXJdQeXCQckG0g3/users
 *
 * x-test-description: /api/v1/groups/:id - request group members
 * user-agent: mock-okta-client
 * accept: application/json
 * content-type: application/json
 * authorization: SSWS 00OgOWZBLBIID9O8SKRGgrJDqebJL54x2cPfzQ3U-l
 * host: rain.okta1.com:1802
 * connection: keep-alive
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("server", "Apache-Coyote/1.1");
  res.setHeader("x-okta-request-id", "req_WYqbG-ZSWKyV9LXDJ6Trw");
  res.setHeader("p3p", "CP=\"HONK\"");
  res.setHeader("set-cookie", ["sid=\"\"; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/","JSESSIONID=9EAB1F515D2D9C85E0F1AA6A5208B5FC; Path=/"]);
  res.setHeader("x-rate-limit-limit", "1200");
  res.setHeader("x-rate-limit-remaining", "1174");
  res.setHeader("x-rate-limit-reset", "1487986301");
  res.setHeader("cache-control", "no-cache, no-store");
  res.setHeader("pragma", "no-cache");
  res.setHeader("expires", "0");
  res.setHeader("link", "<http://rain.okta1.com:1802/api/v1/groups/00gltfXJdQeXCQckG0g3/users?limit=1000>; rel=\"self\", <http://rain.okta1.com:1802/api/v1/groups/00gltfXJdQeXCQckG0g3/users?after=00uvm8ZjzigOHjxMt0g3&limit=1000>; rel=\"next\"");
  res.setHeader("content-type", "application/json;charset=UTF-8");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("date", "Sat, 25 Feb 2017 01:30:46 GMT");

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(new Buffer("W3siaWQiOiIwMHVsdTFpb2NlWHZsc2QwejBnMyIsInN0YXR1cyI6IkFDVElWRSIsImNyZWF0ZWQiOiIyMDE3LTAyLTEzVDIxOjE3OjQ2LjAwMFoiLCJhY3RpdmF0ZWQiOm51bGwsInN0YXR1c0NoYW5nZWQiOm51bGwsImxhc3RMb2dpbiI6IjIwMTctMDItMjRUMjA6NDE6MDEuMDAwWiIsImxhc3RVcGRhdGVkIjoiMjAxNy0wMi0xM1QyMToyMDoxNS4wMDBaIiwicGFzc3dvcmRDaGFuZ2VkIjoiMjAxNy0wMi0xM1QyMToyMDoxNS4wMDBaIiwicHJvZmlsZSI6eyJlbWFpbCI6IndlYm1hc3RlckBjbG91ZGl0dWRlLm5ldCIsImZpcnN0TmFtZSI6IkFkZC1NaW4iLCJsYXN0TmFtZSI6Ik8nQ2xvdWR5IFR1ZCIsImxvZ2luIjoiYWRtaW5pc3RyYXRvcjFAY2xvdWRpdHVkZS5uZXQiLCJtb2JpbGVQaG9uZSI6bnVsbCwic2Vjb25kRW1haWwiOm51bGx9LCJjcmVkZW50aWFscyI6eyJwYXNzd29yZCI6e30sInJlY292ZXJ5X3F1ZXN0aW9uIjp7InF1ZXN0aW9uIjoiTGFzdCA0IGRpZ2l0cyBvZiB5b3VyIHNvY2lhbCBzZWN1cml0eSBudW1iZXI/In0sInByb3ZpZGVyIjp7InR5cGUiOiJPS1RBIiwibmFtZSI6Ik9LVEEifX0sIl9saW5rcyI6eyJzZWxmIjp7ImhyZWYiOiJodHRwOi8vcmFpbi5va3RhMS5jb206MTgwMi9hcGkvdjEvdXNlcnMvMDB1bHUxaW9jZVh2bHNkMHowZzMifX19LHsiaWQiOiIwMHV2bTQ1cndUTEJWM21yUDBnMyIsInN0YXR1cyI6IkRFUFJPVklTSU9ORUQiLCJjcmVhdGVkIjoiMjAxNy0wMi0yNVQwMTozMDo0MS4wMDBaIiwiYWN0aXZhdGVkIjoiMjAxNy0wMi0yNVQwMTozMDo0MS4wMDBaIiwic3RhdHVzQ2hhbmdlZCI6IjIwMTctMDItMjVUMDE6MzA6NDEuMDAwWiIsImxhc3RMb2dpbiI6bnVsbCwibGFzdFVwZGF0ZWQiOiIyMDE3LTAyLTI1VDAxOjMwOjQxLjAwMFoiLCJwYXNzd29yZENoYW5nZWQiOm51bGwsInByb2ZpbGUiOnsiZW1haWwiOiJtb2NrdGVzdGV4YW1wbGUtZGVhY3RpdmVAbW9ja3Rlc3RleGFtcGxlLmNvbSIsImZpcnN0TmFtZSI6Ik5vbmFjdGl2ZSIsImxhc3ROYW1lIjoiTWNKYW5reSIsImxvZ2luIjoibW9ja3Rlc3RleGFtcGxlLWRlYWN0aXZlQG1vY2t0ZXN0ZXhhbXBsZS5jb20iLCJtb2JpbGVQaG9uZSI6bnVsbCwic2Vjb25kRW1haWwiOm51bGx9LCJjcmVkZW50aWFscyI6eyJwcm92aWRlciI6eyJ0eXBlIjoiT0tUQSIsIm5hbWUiOiJPS1RBIn19LCJfbGlua3MiOnsic2VsZiI6eyJocmVmIjoiaHR0cDovL3JhaW4ub2t0YTEuY29tOjE4MDIvYXBpL3YxL3VzZXJzLzAwdXZtNDVyd1RMQlYzbXJQMGczIn19fSx7ImlkIjoiMDB1dm01Mmk0SHNPWFlBQW4wZzMiLCJzdGF0dXMiOiJQUk9WSVNJT05FRCIsImNyZWF0ZWQiOiIyMDE3LTAyLTI1VDAxOjMwOjQxLjAwMFoiLCJhY3RpdmF0ZWQiOiIyMDE3LTAyLTI1VDAxOjMwOjQxLjAwMFoiLCJzdGF0dXNDaGFuZ2VkIjoiMjAxNy0wMi0yNVQwMTozMDo0MS4wMDBaIiwibGFzdExvZ2luIjpudWxsLCJsYXN0VXBkYXRlZCI6IjIwMTctMDItMjVUMDE6MzA6NDEuMDAwWiIsInBhc3N3b3JkQ2hhbmdlZCI6bnVsbCwicHJvZmlsZSI6eyJlbWFpbCI6Im1vY2t0ZXN0ZXhhbXBsZS1kZWxldGVtZUBtb2NrdGVzdGV4YW1wbGUuY29tIiwiZmlyc3ROYW1lIjoiRGVsZXR1cyIsImxhc3ROYW1lIjoiTWNKYW5reSIsImxvZ2luIjoibW9ja3Rlc3RleGFtcGxlLWRlbGV0ZW1lQG1vY2t0ZXN0ZXhhbXBsZS5jb20iLCJtb2JpbGVQaG9uZSI6bnVsbCwic2Vjb25kRW1haWwiOm51bGx9LCJjcmVkZW50aWFscyI6eyJwcm92aWRlciI6eyJ0eXBlIjoiT0tUQSIsIm5hbWUiOiJPS1RBIn19LCJfbGlua3MiOnsic2VsZiI6eyJocmVmIjoiaHR0cDovL3JhaW4ub2t0YTEuY29tOjE4MDIvYXBpL3YxL3VzZXJzLzAwdXZtNTJpNEhzT1hZQUFuMGczIn19fSx7ImlkIjoiMDB1dm04Wmp6aWdPSGp4TXQwZzMiLCJzdGF0dXMiOiJBQ1RJVkUiLCJjcmVhdGVkIjoiMjAxNy0wMi0yNVQwMTozMDo0MS4wMDBaIiwiYWN0aXZhdGVkIjoiMjAxNy0wMi0yNVQwMTozMDo0MS4wMDBaIiwic3RhdHVzQ2hhbmdlZCI6IjIwMTctMDItMjVUMDE6MzA6NDEuMDAwWiIsImxhc3RMb2dpbiI6bnVsbCwibGFzdFVwZGF0ZWQiOiIyMDE3LTAyLTI1VDAxOjMwOjQxLjAwMFoiLCJwYXNzd29yZENoYW5nZWQiOiIyMDE3LTAyLTI1VDAxOjMwOjQxLjAwMFoiLCJwcm9maWxlIjp7ImVtYWlsIjoibW9ja3Rlc3RleGFtcGxlLWZydXRpc0Btb2NrdGVzdGV4YW1wbGUuY29tIiwiZmlyc3ROYW1lIjoiRnJ1dGlzIiwibGFzdE5hbWUiOiJNY0phbmt5IiwibG9naW4iOiJtb2NrdGVzdGV4YW1wbGUtZnJ1dGlzQG1vY2t0ZXN0ZXhhbXBsZS5jb20iLCJtb2JpbGVQaG9uZSI6bnVsbCwic2Vjb25kRW1haWwiOm51bGx9LCJjcmVkZW50aWFscyI6eyJwYXNzd29yZCI6e30sInByb3ZpZGVyIjp7InR5cGUiOiJPS1RBIiwibmFtZSI6Ik9LVEEifX0sIl9saW5rcyI6eyJzZWxmIjp7ImhyZWYiOiJodHRwOi8vcmFpbi5va3RhMS5jb206MTgwMi9hcGkvdjEvdXNlcnMvMDB1dm04Wmp6aWdPSGp4TXQwZzMifX19XQ==", "base64"));
  res.end();

  return __filename;
};