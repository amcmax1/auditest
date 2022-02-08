# v1
### Data Models 

##### CREATE TABLE repositories
id PRIMARY KEY
github_api_key STRING
org_id FOREIGN KEY organizations
...
...

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

##### CREATE TABLE branch_pull_requests
id PRIMARY KEY
pull_request_id FOREIGN KEY pull_requests
branch_id FOREIGN KEY branches
type ENUM (base, head, tag, remote, other) 
commit_sha STRING OR FOREIGN KEY

##### CREATE TABLE commits

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