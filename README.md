## WordPlay

A stateless single page application to leverage the technique of combining words to generate new ideas.

## Development
Create a bucket

```
./sspa create_bucket keighty.wordplay.com
```

### Production
[keighty.wordplay.com](http://keighty.wordplay.com.s3-website-us-east-1.amazonaws.com)

### Deployment
```
$ aws s3 sync public/ s3://keighty.wordplay.com --acl public-read
```

HeroImage.jpg is licensed from popularwoodworking.com under the Creative Commons Attribution License (CC BY 3.0 US).

AWS script credit: [Serverless Single Page Applications](https://pragprog.com/book/brapps/serverless-single-page-apps) by Ben Rady
