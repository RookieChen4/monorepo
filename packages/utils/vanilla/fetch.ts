import axios from 'axios';
import { awesomepackage } from './compiled';
export function fetch() {
    axios({
        method: "POST",
        url: "api/protobuf/test",
        headers: { contentType: "application/x-protobuf" },
        responseType: "blob",
        data: {},
      }).then((res) => {
        const blob = res.data;
          blob.arrayBuffer().then((res) => {
            var message = awesomepackage.AwesomeMessage.decode(new Uint8Array(res));
            console.log(message.awesomeField);
        });
      });
}