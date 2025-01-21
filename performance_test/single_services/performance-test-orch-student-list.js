import { student_list_orch } from "../loadtest_api/student_list_orch.js";
import Options from "../option.config.js";

export const thresholds_429 = {
  "http_req_failed{status:429}": ["rate<0.05"],
};

export const options = Options.const_arrive_time(thresholds_429);

export default function () {
  student_list_orch();
}
