import {Component, HostBinding} from "@angular/core";
import {API_LIST_TYPE} from "../../app/app.type";
import {NgForOf, NgIf} from "@angular/common";
import { MatSelect } from "@angular/material/select";
import { CreateBucketCommand, S3Client } from "@aws-sdk/client-s3";
import { HttpClient, HttpHeaders } from "@angular/common/http";

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
  
  client = new S3Client({
    region: "ap-northeast-1"
  });
  
  
  createBucket  = async () => {
    // const command = new CreateBucketCommand({
    //   Bucket: "angular_test_create"
    // })
    //
    // try {
    //   const { Location } = await this.client.send(command);
    //   console.log(`Bucket created with location ${Location}`)
    // } catch (err) {
    //   console.error(err)
    // }
    const params = {
      url: "http://localhost:8080",
      data: "[2024/08/16_17:14:18.990] ERROR SdeExecSql - E:execsql #Failed to SQL. :bindParamキーの指定がありません。\\r\\n[2024/08/16_17:30:22.134] ERROR SdeExecSql - E:execsql #Failed to SQL. :bindParamキーの指定がありません。\\r\\n[2024/08/16_17:36:40.633] ERROR SdeExecSql - E:execsql #Failed to SQL. :bindParamキーの指定がありません。\\r\\n[2024/08/16_17:37:57.667] ERROR SdeExecSql - E:execsql #Failed to SQL. :bindParamキーの指定がありません。\\r\\n[2024/08/16_17:38:21.292] ERROR SdeExecSql - E:execsql #Failed to SQL. :bindParamキーの指定がありません。\\r\\n[2024/08/16_17:40:26.322] ERROR SdeExecSql - E:execsql #Failed to SQL. :bindParamキーの指定がありません。\\r\\n[2024/08/16_17:40:40.777] ERROR SdeExecSql - E:execsql #Failed to SQL. :bindParamキーの指定がありません。\\r\\n[2024/08/16_17:44:07.563] ERROR SdeExecSql - E:execsql #Failed to SQL. :bindParamキーの指定がありません。\\r\\n[2024/08/16_17:44:16.063] ERROR SdeExecSql - E:execsql #Failed to SQL. :bindParamキーの指定がありません。\\r\\n[2024/08/16_17:51:20.127] ERROR SdeExecSql - E:execsql #Failed to SQL. :bindParamキーの指定がありません。\\r\\n[2024/08/16_18:11:12.239] ERROR SdeExecSql - E:execsql #Failed to SQL. :bindParamキーの指定がありません。\\r\\n[2024/08/16_18:12:02.034] ERROR SdeExecSql - E:execsql #Failed to SQL. :bindParamキーの指定がありません。\\r\\n[2024/08/16_18:14:44.614] ERROR SdeExecSql - E:execsql #Failed to SQL. :bindParamキーの指定がありません。\\r\\n[2024/08/16_18:17:44.393] ERROR SdeExecSql - E:execsql #Failed to SQL. :bindParamキーの指定がありません。\\r\\n[2024/08/16_18:27:02.028] ERROR SdeExecSql - E:execsql #Failed to SQL. :bindParamキーの指定がありません。\\r\\n[2024/08/16_18:29:29.525] ERROR SdeExecSql - E:execsql #Failed to SQL. :bindParamキーの指定がありません。\\r\\n[2024/08/16_18:30:05.506] ERROR SdeExecSql - E:execsql #Failed to SQL. :bindParamキーの指定がありません。\\r\\n[2024/08/16_18:34:07.803] ERROR SdeExecSql - E:execsql #Failed to SQL. :bindParamキーの指定がありません。\\r\\n[2024/08/16_18:39:32.043] ERROR SdeExecSql - E:execsql #Failed to SQL. :bindParamキーの指定がありません。\\r\\n[2024/08/16_18:40:17.512] ERROR SdeExecSql - E:execsql #Failed to SQL. :bindParamキーの指定がありません。\\r\\n"
    }
    this.httpClient.put(params.url, params.data, {
      headers: new HttpHeaders({"Content-Length": new Blob([params.data]).size, "Access-Control-Allow-Origin": "*"})
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
