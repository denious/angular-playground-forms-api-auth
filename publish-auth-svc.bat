CALL ng build @phx/authentication-service
CD dist\phx\authentication-service
CALL npm publish --registry=https://phenomenex.myget.org/F/phx/npm/
CD ..\..\..