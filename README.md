# restify-micro-service
Simple Micro Service boiler plate code using Restify

## Running

## Testing & Coverage

```sh
    $ gulp test
```

```sh
    $ gulp cover
```

## Deployment

pm2 is used for deployment. ecosystem file holds the deployment information such as server and any post deploy hooks that need to be kicked off. 

```sh
    $ pm2 deploy ecosystem
```