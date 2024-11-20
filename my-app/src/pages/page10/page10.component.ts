import {Component, HostBinding} from "@angular/core";
import {API_LIST_TYPE} from "../../app/app.type";
import {NgForOf, NgIf} from "@angular/common";
import { MatSelect } from "@angular/material/select";
import {CreateBucketCommand, PutObjectCommand, S3Client} from "@aws-sdk/client-s3";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner";

@Component({
  selector: 'app-page-10'
  , standalone: true
  , templateUrl: "page10.component.html"
  , imports: [NgForOf, NgIf, MatSelect]
  , styleUrls: ["page10.component.scss"]
})

export class Page10Component {

  constructor(private httpClient: HttpClient) {
  }

  @HostBinding('class')
  classes: string = 'app-page-flex app-page-flex-1'

  apiList: API_LIST_TYPE[] = API_LIST

  /**
   * 创建预签名URL用于上传文件
   * @param region
   * @param bucket
   * @param key
   */
  createPresignedUrlWithClient = ({ region, bucket, key }: any) => {
    const client = new S3Client({
      region,
      credentials: {accessKeyId: 'xxxxxxxx', secretAccessKey: 'xxxxxxx'},
    });
    const command = new PutObjectCommand({ Bucket: bucket, Key: key });
    return getSignedUrl(client, command, { expiresIn: 3600 });
  }


  uploadFiles  = async () => {
    let params = {
      url: "",
      data: "文件内容，以字符串的形式上传，云端自动创建 logs3.txt 文件，然后写入内容"
    }

    params.url = await this.createPresignedUrlWithClient({
      region: "us-east-1",
      bucket: "ap-test-logs-2",
      key: "conlog_2024092610-2024092614_1.txt"
    })

    this.httpClient.put(params.url, params.data, {
      headers: new HttpHeaders({'Content-Type': 'text/plain; charset=UTF-8'}),
    }).subscribe(response => {
      console.log(response)
    })
  }
}

const API_LIST: API_LIST_TYPE[] = [
  {
    name: ""
    , success: false
    , description: ""
  }
  , {
    name: ""
    , success: false
    , description: ""
  }
]
