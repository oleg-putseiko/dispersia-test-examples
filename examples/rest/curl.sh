curl -X POST 'https://api.dispersia.io/messages' \
  -H 'Authorization: Bearer sk_live_XXXXXXXXX' \
  -H 'Content-Type: application/json' \
  -d '{
    "template_id": "tg_XXXXXXXXX",
    "data": {
      "name": "Jane Doe"
    }
  }'