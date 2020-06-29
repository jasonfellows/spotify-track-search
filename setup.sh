read -p "Enter Spotify Client ID: " spotify_client_id
read -p "Enter Spotify Secret: " spotify_secret
encoded_creds=$(echo -n "$spotify_client_id:$spotify_secret" | base64 -w 0)
spotify_access_token=$(curl -X "POST" -H "Authorization: Basic $encoded_creds" -d grant_type=client_credentials https://accounts.spotify.com/api/token | python3 -c "import sys, json; print(json.load(sys.stdin)['access_token'])")
echo "SPOTIFY_ACCESS_TOKEN=$spotify_access_token" > .env.local
if hash yarn 2>/dev/null; then
  yarn
  yarn dev
else
  npm i
  npm run dev
fi
