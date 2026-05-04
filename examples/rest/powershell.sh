$headers = @{
    Authorization = "Bearer sk_live_XXXXXXXXX"
}

$body = @{
    template_id = "tg_XXXXXXXXX"
    data = @{
        name = "Jane Doe"
    }
} 

$jsonBody = $body | ConvertTo-Json -Depth 10

Invoke-RestMethod `
    -Uri "https://api.dispersia.io/messages" `
    -Method Post `
    -Headers $headers `
    -ContentType "application/json; charset=utf-8" `
    -Body $jsonBody