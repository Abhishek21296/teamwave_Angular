import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StackApiService {

  constructor(
    private http: HttpClient
  ) { }

  listingdata = {
    "items": [
        {
            "tags": [
                "regex",
                "google-tag-manager",
                "google-datalayer"
            ],
            "owner": {
                "account_id": 23068979,
                "reputation": 1,
                "user_id": 17183052,
                "user_type": "registered",
                "profile_image": "https://lh3.googleusercontent.com/a-/AOh14GiU7BAex3uM7oHc5bJ70yoP3dgvygfMYw3FGDUc=k-s256",
                "display_name": "Ace Noppen",
                "link": "https://stackoverflow.com/users/17183052/ace-noppen"
            },
            "is_answered": false,
            "view_count": 2,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1634564900,
            "creation_date": 1634564900,
            "question_id": 69617269,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/69617269/regex-table-get-domain-name-from-email-in-google-tag-manager-gtm",
            "title": "Regex table get domain name from email in Google Tag Manager (GTM)"
        },
        {
            "tags": [
                "javascript",
                "reactjs",
                "react-hooks",
                "nested",
                "fetch-api"
            ],
            "owner": {
                "account_id": 15156176,
                "reputation": 19,
                "user_id": 10936902,
                "user_type": "registered",
                "profile_image": "https://lh6.googleusercontent.com/-ieipzx0YKY8/AAAAAAAAAAI/AAAAAAAAAik/Keci0yPUHBg/photo.jpg?sz=256",
                "display_name": "Kabir Pathak",
                "link": "https://stackoverflow.com/users/10936902/kabir-pathak"
            },
            "is_answered": false,
            "view_count": 3,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1634564889,
            "creation_date": 1634564889,
            "question_id": 69617268,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/69617268/how-to-handle-errors-for-nested-fetch-requests-in-javascript",
            "title": "How to handle errors for nested fetch requests in Javascript?"
        },
        {
            "tags": [
                "c#",
                ".net",
                "visual-studio"
            ],
            "owner": {
                "account_id": 19130654,
                "reputation": 1,
                "user_id": 13972644,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/28ea1e7960b5de9af08db3753121c0c6?s=256&d=identicon&r=PG&f=1",
                "display_name": "tapeworm",
                "link": "https://stackoverflow.com/users/13972644/tapeworm"
            },
            "is_answered": false,
            "view_count": 2,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1634564885,
            "creation_date": 1634564885,
            "question_id": 69617266,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/69617266/copying-files-from-a-specific-date-over-to-another-directory",
            "title": "Copying files from a specific date over to another directory"
        },
        {
            "tags": [
                "spring-boot",
                "spring-webflux",
                "nextcloud"
            ],
            "owner": {
                "account_id": 18012042,
                "reputation": 9,
                "user_id": 13091433,
                "user_type": "registered",
                "profile_image": "https://lh6.googleusercontent.com/-az1dk9SPvgU/AAAAAAAAAAI/AAAAAAAAAAA/AKF05nBTOya6P9asg42z03Jo8CQ0MQtwxQ/photo.jpg?sz=256",
                "display_name": "zakaria daoudi",
                "link": "https://stackoverflow.com/users/13091433/zakaria-daoudi"
            },
            "is_answered": false,
            "view_count": 2,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1634564878,
            "creation_date": 1634564878,
            "question_id": 69617265,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/69617265/how-to-use-nextcloud-with-spring-boot-o-get-videos-and-save",
            "title": "How to use nextcloud with spring boot o get videos and save"
        },
        {
            "tags": [
                "django",
                "pip",
                "sql-order-by",
                "django-queryset"
            ],
            "owner": {
                "account_id": 19380416,
                "reputation": 67,
                "user_id": 14171809,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/05b28902e8c2b3eb8b92f289f1833221?s=256&d=identicon&r=PG&f=1",
                "display_name": "ddjjaannggoo",
                "link": "https://stackoverflow.com/users/14171809/ddjjaannggoo"
            },
            "is_answered": false,
            "view_count": 2,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1634564874,
            "creation_date": 1634564874,
            "question_id": 69617264,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/69617264/ordering-pip-package-versions-in-django",
            "title": "Ordering pip package versions in django"
        },
        {
            "tags": [
                "javascript",
                "typescript",
                "jestjs",
                "ts-jest"
            ],
            "owner": {
                "account_id": 22816825,
                "reputation": 11,
                "user_id": 16967312,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/479da722c4fd1da186b0b221b0882c0b?s=256&d=identicon&r=PG",
                "display_name": "Yurii Hrecheniuk",
                "link": "https://stackoverflow.com/users/16967312/yurii-hrecheniuk"
            },
            "is_answered": false,
            "view_count": 4,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1634564872,
            "creation_date": 1634564872,
            "question_id": 69617263,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/69617263/what-to-test-javascript-or-typescript",
            "title": "What to test: JavaScript or TypeScript?"
        },
        {
            "tags": [
                "json",
                "flutter",
                "dart"
            ],
            "owner": {
                "account_id": 22701256,
                "reputation": 15,
                "user_id": 16868644,
                "user_type": "registered",
                "profile_image": "https://lh3.googleusercontent.com/a/AATXAJwBy9XXebvjUWtbUfj3YmLh_ZMRJJfa-dSa4HkE=k-s256",
                "display_name": "Angelina Petzold",
                "link": "https://stackoverflow.com/users/16868644/angelina-petzold"
            },
            "is_answered": false,
            "view_count": 3,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1634564869,
            "creation_date": 1634564869,
            "question_id": 69617262,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/69617262/how-do-i-create-an-object-list-from-json-file",
            "title": "How do I create an object List from Json File"
        },
        {
            "tags": [
                "user-interface",
                "applescript"
            ],
            "owner": {
                "account_id": 14244300,
                "reputation": 89,
                "user_id": 10289836,
                "user_type": "registered",
                "profile_image": "https://lh5.googleusercontent.com/-ZUhnyk6HnBw/AAAAAAAAAAI/AAAAAAAAAAA/APUIFaPn1jWXp1DeMYby4TsNNyheIW7EYQ/mo/photo.jpg?sz=256",
                "display_name": "userX",
                "link": "https://stackoverflow.com/users/10289836/userx"
            },
            "is_answered": false,
            "view_count": 2,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1634564865,
            "creation_date": 1634564865,
            "question_id": 69617260,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/69617260/applescript-how-to-get-and-set-bounds-of-an-automated-app",
            "title": "AppleScript - How to get and set bounds of an automated app?"
        },
        {
            "tags": [
                "amazon-web-services",
                "apache-kafka",
                "aws-msk"
            ],
            "owner": {
                "account_id": 8973515,
                "reputation": 1,
                "user_id": 6691206,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/cb83b539155465c7442329371d35f5dd?s=256&d=identicon&r=PG&f=1",
                "display_name": "Skinkpajen",
                "link": "https://stackoverflow.com/users/6691206/skinkpajen"
            },
            "is_answered": false,
            "view_count": 3,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1634564865,
            "creation_date": 1634564865,
            "question_id": 69617259,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/69617259/making-aws-msk-public-using-nlb-and-iam-authentication-hostname-verification-f",
            "title": "Making AWS MSK public using NLB and IAM authentication - Hostname verification failed"
        },
        {
            "tags": [
                "android",
                "kotlin",
                "android-edittext",
                "actionlistener"
            ],
            "owner": {
                "account_id": 11738256,
                "reputation": 494,
                "user_id": 8591381,
                "user_type": "registered",
                "accept_rate": 56,
                "profile_image": "https://www.gravatar.com/avatar/5b5b4ffbf29b35882d498ce4ab560f83?s=256&d=identicon&r=PG&f=1",
                "display_name": "Joakim Sj&#246;stedt",
                "link": "https://stackoverflow.com/users/8591381/joakim-sj%c3%b6stedt"
            },
            "is_answered": false,
            "view_count": 3,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1634564862,
            "creation_date": 1634564862,
            "question_id": 69617257,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/69617257/using-setoneditoractionlistener-prevents-the-view-from-disapearing-when-pressing",
            "title": "using setOnEditorActionListener prevents the view from disapearing when pressing done"
        },
        {
            "tags": [
                "javascript",
                "webpack",
                "summernote"
            ],
            "owner": {
                "account_id": 1806464,
                "reputation": 2885,
                "user_id": 1643487,
                "user_type": "registered",
                "accept_rate": 67,
                "profile_image": "https://www.gravatar.com/avatar/05dfc0dd6d4867b6997f279626f117b6?s=256&d=identicon&r=PG",
                "display_name": "Timo002",
                "link": "https://stackoverflow.com/users/1643487/timo002"
            },
            "is_answered": false,
            "view_count": 3,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1634564853,
            "creation_date": 1634564853,
            "question_id": 69617255,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/69617255/use-summernote-with-webpack",
            "title": "Use Summernote with Webpack"
        },
        {
            "tags": [
                "javascript",
                "html",
                "css",
                "reactjs",
                "styled-components"
            ],
            "owner": {
                "account_id": 17292329,
                "reputation": 321,
                "user_id": 12523669,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/fc868f924752024acd716a671c79d9d4?s=256&d=identicon&r=PG&f=1",
                "display_name": "via",
                "link": "https://stackoverflow.com/users/12523669/via"
            },
            "is_answered": false,
            "view_count": 5,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1634564847,
            "creation_date": 1634564847,
            "question_id": 69617253,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/69617253/styled-component-react-does-not-recognize-x",
            "title": "styled-component React does not recognize X"
        },
        {
            "tags": [
                "async-await",
                "fastapi",
                "starlette"
            ],
            "owner": {
                "account_id": 23068951,
                "reputation": 1,
                "user_id": 17183025,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/45315d1c0f27e6dbd972ae1bbbb42b8e?s=256&d=identicon&r=PG",
                "display_name": "Soltanat",
                "link": "https://stackoverflow.com/users/17183025/soltanat"
            },
            "is_answered": false,
            "view_count": 4,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1634564836,
            "creation_date": 1634564836,
            "question_id": 69617252,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/69617252/response-file-stream-from-s3-fastapi",
            "title": "Response file stream from S3 FastAPI"
        },
        {
            "tags": [
                "web-deployment"
            ],
            "owner": {
                "account_id": 23068721,
                "reputation": 1,
                "user_id": 17182828,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/8aff576e41744e931857d04d78b5ae47?s=256&d=identicon&r=PG",
                "display_name": "Arman Khan Pious",
                "link": "https://stackoverflow.com/users/17182828/arman-khan-pious"
            },
            "is_answered": false,
            "view_count": 5,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1634564827,
            "creation_date": 1634564827,
            "question_id": 69617248,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/69617248/how-to-be-a-web-developer",
            "title": "How to be a Web Developer?"
        },
        {
            "tags": [
                "python"
            ],
            "owner": {
                "account_id": 23060903,
                "reputation": 1,
                "user_id": 17176203,
                "user_type": "registered",
                "profile_image": "https://lh3.googleusercontent.com/a-/AOh14Gg5wSjoZrw_qR4dmOVtgfw-0xm_6awld4ompOrh=k-s256",
                "display_name": "Leonavon",
                "link": "https://stackoverflow.com/users/17176203/leonavon"
            },
            "is_answered": false,
            "view_count": 8,
            "answer_count": 0,
            "score": -1,
            "last_activity_date": 1634564894,
            "creation_date": 1634564819,
            "last_edit_date": 1634564894,
            "question_id": 69617246,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/69617246/iam-trying-to-make-a-list-using-slicing-but-i-exactly-dont-know-how-to-do-it",
            "title": "Iam trying to make a list using slicing but i exactly don&#39;t know how to do it?"
        },
        {
            "tags": [
                "terminal",
                "caddy"
            ],
            "owner": {
                "account_id": 20383214,
                "reputation": 59,
                "user_id": 14952850,
                "user_type": "registered",
                "profile_image": "https://lh4.googleusercontent.com/-CZfb1MFrags/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnzlvHgzrYTE7FoN44rn2KiqcZ8ag/s96-c/photo.jpg?sz=256",
                "display_name": "Oba Api",
                "link": "https://stackoverflow.com/users/14952850/oba-api"
            },
            "is_answered": false,
            "view_count": 2,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1634564818,
            "creation_date": 1634564818,
            "question_id": 69617245,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/69617245/running-program-from-parent-folder-in-terminal",
            "title": "running program from parent folder in terminal"
        },
        {
            "tags": [
                "azure",
                "azure-devops",
                "azure-pipelines"
            ],
            "owner": {
                "account_id": 15344619,
                "reputation": 11,
                "user_id": 11070450,
                "user_type": "registered",
                "profile_image": "https://lh4.googleusercontent.com/-Jj2Vi8GU5EE/AAAAAAAAAAI/AAAAAAAAAL8/VQBOUM9Lwxo/photo.jpg?sz=256",
                "display_name": "Adarsh",
                "link": "https://stackoverflow.com/users/11070450/adarsh"
            },
            "is_answered": false,
            "view_count": 2,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1634564808,
            "creation_date": 1634564808,
            "question_id": 69617241,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/69617241/how-to-run-second-azure-pipeline-on-the-completion-of-a-stage-on-first-pipeline",
            "title": "How to run second azure pipeline on the completion of a stage on first pipeline"
        },
        {
            "tags": [
                "java",
                "kubernetes",
                "jvm",
                "kubernetes-pod",
                "jcmd"
            ],
            "owner": {
                "account_id": 23067526,
                "reputation": 11,
                "user_id": 17181775,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/15ad6bcf569556a8a6b7f89af9564d96?s=256&d=identicon&r=PG",
                "display_name": "r4sk01",
                "link": "https://stackoverflow.com/users/17181775/r4sk01"
            },
            "is_answered": false,
            "view_count": 3,
            "answer_count": 0,
            "score": 1,
            "last_activity_date": 1634564791,
            "creation_date": 1634564791,
            "question_id": 69617239,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/69617239/running-jcmd-in-k8-pod-permission-denied-or-unable-to-open-socket-file",
            "title": "Running jcmd in k8 pod, permission denied or unable to open socket file"
        },
        {
            "tags": [
                "python",
                "list",
                "function",
                "sorting"
            ],
            "owner": {
                "account_id": 23068887,
                "reputation": 1,
                "user_id": 17182972,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/b74b42c3d35fa33bdb4e2c57fe8343ee?s=256&d=identicon&r=PG",
                "display_name": "IsaacPerry88",
                "link": "https://stackoverflow.com/users/17182972/isaacperry88"
            },
            "is_answered": false,
            "view_count": 8,
            "answer_count": 0,
            "score": -1,
            "last_activity_date": 1634564827,
            "creation_date": 1634564790,
            "last_edit_date": 1634564827,
            "question_id": 69617238,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/69617238/how-to-write-the-correct-code-sort-a-list-in-alphabetical-order-within-a-functi",
            "title": "How to write the correct code: sort a list in alphabetical order within a function?"
        },
        {
            "tags": [
                "bash",
                "shell",
                "wildcard",
                "ls"
            ],
            "owner": {
                "account_id": 11044276,
                "reputation": 1175,
                "user_id": 8111078,
                "user_type": "registered",
                "accept_rate": 75,
                "profile_image": "https://www.gravatar.com/avatar/a8ef30e5a8ad47e37c7a651a5962e92a?s=256&d=identicon&r=PG&f=1",
                "display_name": "acincognito",
                "link": "https://stackoverflow.com/users/8111078/acincognito"
            },
            "is_answered": false,
            "view_count": 5,
            "answer_count": 0,
            "score": 0,
            "last_activity_date": 1634564785,
            "creation_date": 1634564785,
            "question_id": 69617237,
            "content_license": "CC BY-SA 4.0",
            "link": "https://stackoverflow.com/questions/69617237/shell-script-with-ls-ls-and-or-patterns-wildcards",
            "title": "Shell script with ls -ls and OR patterns wildcards"
        }
    ],
    "has_more": true,
    "quota_max": 300,
    "quota_remaining": 280
  }

  /**
   * gets the questions identified by a set of ids
   * @param questionId ID of the question whose details are to be fetched
   * @param params query params for geting the details
   * @returns 
   */
  getQuestionDetails(questionId: string, params: any): Observable<any> {
    return this.http.get(environment.apiUrl.concat(`/questions/${questionId}`), {
      params: {
        site: 'stackoverflow',
        ...params
      }
    })
  }

  /**
   * get paginated list of the questions from the stackexchange API
   * @param params query params for this request
   * @returns 
   */
  getQuestionListing(params: any): Observable<any> {
    return this.http.get(environment.apiUrl.concat(`/search/advanced`), {
      params: {
        site: 'stackoverflow',
        filter: "!nKzQUR3Egv",
        ...params
      }
    })
  }
}
