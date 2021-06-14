var store = [{
        "title": "상태 코드",
        "excerpt":"클라이언트가 보낸 요청의 처리 상태를 응답에서 알려주는 기능     1xx (Informational): 요청이 수신되어 처리중   2xx (Sucessful): 요청 정상 처리   3xx (Redirection): 요청을 완료하려면 추가 행동이 필요   4xx (Client Error): 클라이언트 오류   5xx (Server Error): 서버 오류      만약 299와 같이 모르는 상태 코드가 나온다면??  ➡️299는 200번대에 있으니까 2xx의 의미로 생각하자!!    2xx (Successful)   1️⃣ 200 OK        가장 많이 볼 수 있는 케이스   2️⃣ 201 Created       클라이언트에서 저장하고 싶은 리소스 전달   서버는 이를 받아서 저장하고 성공하면 201 반환   클라이언트는 Location필드를 통해서 저장된 위치를 확인   3️⃣ 202 Accepted     요청이 접수되었으나 처리가 완료되지 않은 상태   4️⃣ 204 No Content     서버가 요청을 성공적으로 수행했지만, 응답 페이로드 본문에 보낼 데이터가 없는 경우      Ex) 웹에 있는 save 버튼을 눌렀을 때 같은 화면을 유지하지만 204 메시지를 통해서 성공한 것을 인식할 수 있다.    3xx (Redirection)   1️⃣ Redirection 이란?  웹 브라우저는 3xx 응답의 결과에 Location 헤더가 있으면, Location 위치로 자동 이동하는 것을 말합니다.        클라이언트가 /event 페이지를 요청   서버는 301 응답 코드를 내고 Location 필드에 새로운 페이지를 반환   클라이언트는 반환된 페이지에 자동으로 redirect   2️⃣ Redirection 이해     영구 Redirection            특정 리소스의 URI가 영구적으로 이동하는 경우           일시 Redirection            일시적으로 변경하는 경우       주문 완료 후 주문 내역 화면으로 이동           특수 Redirection            결과 대신 캐시를 사용          ","categories": ["웹기본"],
        "tags": ["웹기본"],
        "url": "/%EC%9B%B9%EA%B8%B0%EB%B3%B8/%EC%83%81%ED%83%9C-%EC%BD%94%EB%93%9C/",
        "teaser": null
      }]
