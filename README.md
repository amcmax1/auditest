# v1

### Basic Local Setup
- clone repo
- set up a separate test repo with GitWebooks
- setup ngrok account locally
- point test repo Gitwebooks to localhost:3333/git_hooks endpoint
- create .env file in v1 root with postgres docker image (docker-compose.yml) credentials
- in v1 root directory run: "docker-compose up --build"
- in ngrok application directory run: "./ngrok http 127.0.0.1:3333 -host-header="127.0.0.1:3333" "


### Browser clients
ngrok web client: http://127.0.0.1:4040/inspect/http
client web app: http://localhost:3000
auditest server: http://localhost:3333

### PSQL CLI:
docker exec -it ${docker-image-id} bash
psql -h postgres-db -p 5432 -U admin -d testdb -W

### Web App Client Material UI MIT data grid
![alt text](/resources/mit-mui-data-grid-screenshot.png)

### Data Models 

##### CREATE TABLE repositories
id PRIMARY KEY
github_api_key STRING
org_id FOREIGN KEY organizations

##### CREATE TABLE git_hooks
id PRIMARY KEY
raw_payload JSONB
headers JSONB OR STRING
sender_ip STRING
body JSONB OR STRING
column for each header

##### CREATE TABLE git_actions
id PRIMARY KEY
data JSONB (JSON payload from git_hooks table)
type STRING (open, commit, etc.)
contributor_id FOREIGN KEY contributors

##### CREATE TABLE pull_requests
// each pull request has multiple actions
// each has multiple commits 
// metadata of first pull request
// base_ref branch_id FOREIGN KEY branches/refs
// head_ref  branch_id FOREIGN KEY branches/refs
status ENUM (opened, merged, rejected, etc)
pr_update_change TIMESTAMP 

##### CREATE TABLE pull_request_actions
// table of changes to a single pull request from a git action, also for notifications
id PRIMARY KEY
pull_request_id FOREIGN KEY
git_action_id FOREIGN KEY
pull request status
pr_updated 

##### CREATE TABLE branches/refs
id PRIMARY KEY
repository_id FOREIGN KEY repositories

##### CREATE TABLE branches/refs
id PRIMARY KEY
repository_id FOREIGN KEY repositories

##### CREATE TABLE branch_pull_requests
id PRIMARY KEY
pull_request_id FOREIGN KEY pull_requests
branch_id FOREIGN KEY branches
type ENUM (base, head, tag, remote, other) 
commit_sha STRING OR FOREIGN KEY

##### CREATE TABLE commits
id PRIMARY KEY
sha STRING 
message_body STRING TEXT
pull_request_id FOREIGN KEY pull_requests
branch_id FOREIGN KEY branches
contributor_id FOREIGN KEY contributors

##### CREATE TABLE USERS
id PRIMARY KEY
name
email
admin
auth_token

##### CREATE TABLE contributors
id PRIMARY KEY
login_name string
vc_type string or enum (git, svn, mercurial)
git_host string or enum (github, gitlab, bitbucket, internal, unknown)
host_metadata JSONB
github_metadata JSONB (gh_user_id string, gh_node_id string, gh_urls JSONB, gh_type string, gh_site_admin BINARY)
user_id FOREIGN KEY users table