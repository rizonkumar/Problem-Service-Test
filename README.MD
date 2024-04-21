### Problem Service

## Routing Flow in the Project

- **/api/v1/problems/ping**

  - The route breakdown:
    - `/api` -> `/v1` -> `/problems` -> `/ping`

  This route follows the path:

        `apiRouter` -> `v1Router` -> `problemRouter` -> `problemController`

- Code flow
  - Controller -> Service -> Repositories
