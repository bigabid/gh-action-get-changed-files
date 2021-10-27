// External Dependencies
const fs     = require('fs');
const github = require('@actions/github');
const core   = require('@actions/core');

// const context = {
// 	payload: {
// 	  after: '9284ddd8bcc96d14002cd521954571561da148b5',
// 	  base_ref: null,
// 	  before: '38cfcf8e5a8e3295483da76b5438a44b5287617e',
// 	  commits: [
// 		{
// 		  author: {
// 			email: 'rotem.l@bigabid.com',
// 			name: 'rotem.l',
// 			username: 'rotemlevibigabid'
// 		  },
// 		  committer: {
// 			email: 'rotem.l@bigabid.com',
// 			name: 'rotem.l',
// 			username: 'rotemlevibigabid'
// 		  },
// 		  distinct: true,
// 		  id: '9284ddd8bcc96d14002cd521954571561da148b5',
// 		  message: '.',
// 		  timestamp: '2021-10-27T16:00:47+03:00',
// 		  tree_id: '644e0560a6fb883ee50e49626a70059d059e304a',
// 		  url: 'https://github.com/bigabid/ds-airflow-mwaa/commit/9284ddd8bcc96d14002cd521954571561da148b5'
// 		}
// 	  ],
// 	  compare: 'https://github.com/bigabid/ds-airflow-mwaa/compare/38cfcf8e5a8e...9284ddd8bcc9',
// 	  created: false,
// 	  deleted: false,
// 	  forced: false,
// 	  head_commit: {
// 		author: {
// 		  email: 'rotem.l@bigabid.com',
// 		  name: 'rotem.l',
// 		  username: 'rotemlevibigabid'
// 		},
// 		committer: {
// 		  email: 'rotem.l@bigabid.com',
// 		  name: 'rotem.l',
// 		  username: 'rotemlevibigabid'
// 		},
// 		distinct: true,
// 		id: '9284ddd8bcc96d14002cd521954571561da148b5',
// 		message: '.',
// 		timestamp: '2021-10-27T16:00:47+03:00',
// 		tree_id: '644e0560a6fb883ee50e49626a70059d059e304a',
// 		url: 'https://github.com/bigabid/ds-airflow-mwaa/commit/9284ddd8bcc96d14002cd521954571561da148b5'
// 	  },
// 	  organization: {
// 		avatar_url: 'https://avatars.githubusercontent.com/u/11740278?v=4',
// 		description: null,
// 		events_url: 'https://api.github.com/orgs/bigabid/events',
// 		hooks_url: 'https://api.github.com/orgs/bigabid/hooks',
// 		id: 11740278,
// 		issues_url: 'https://api.github.com/orgs/bigabid/issues',
// 		login: 'bigabid',
// 		members_url: 'https://api.github.com/orgs/bigabid/members{/member}',
// 		node_id: 'MDEyOk9yZ2FuaXphdGlvbjExNzQwMjc4',
// 		public_members_url: 'https://api.github.com/orgs/bigabid/public_members{/member}',
// 		repos_url: 'https://api.github.com/orgs/bigabid/repos',
// 		url: 'https://api.github.com/orgs/bigabid'
// 	  },
// 	  pusher: {
// 		email: '87079441+rotemlevibigabid@users.noreply.github.com',
// 		name: 'rotemlevibigabid'
// 	  },
// 	  ref: 'refs/heads/master',
// 	  repository: {
// 		allow_forking: false,
// 		archive_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/{archive_format}{/ref}',
// 		archived: false,
// 		assignees_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/assignees{/user}',
// 		blobs_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/git/blobs{/sha}',
// 		branches_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/branches{/branch}',
// 		clone_url: 'https://github.com/bigabid/ds-airflow-mwaa.git',
// 		collaborators_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/collaborators{/collaborator}',
// 		comments_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/comments{/number}',
// 		commits_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/commits{/sha}',
// 		compare_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/compare/{base}...{head}',
// 		contents_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/contents/{+path}',
// 		contributors_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/contributors',
// 		created_at: 1635148788,
// 		default_branch: 'master',
// 		deployments_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/deployments',
// 		description: null,
// 		disabled: false,
// 		downloads_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/downloads',
// 		events_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/events',
// 		fork: false,
// 		forks: 0,
// 		forks_count: 0,
// 		forks_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/forks',
// 		full_name: 'bigabid/ds-airflow-mwaa',
// 		git_commits_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/git/commits{/sha}',
// 		git_refs_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/git/refs{/sha}',
// 		git_tags_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/git/tags{/sha}',
// 		git_url: 'git://github.com/bigabid/ds-airflow-mwaa.git',
// 		has_downloads: true,
// 		has_issues: true,
// 		has_pages: false,
// 		has_projects: true,
// 		has_wiki: true,
// 		homepage: null,
// 		hooks_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/hooks',
// 		html_url: 'https://github.com/bigabid/ds-airflow-mwaa',
// 		id: 420930291,
// 		is_template: false,
// 		issue_comment_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/issues/comments{/number}',
// 		issue_events_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/issues/events{/number}',
// 		issues_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/issues{/number}',
// 		keys_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/keys{/key_id}',
// 		labels_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/labels{/name}',
// 		language: 'Python',
// 		languages_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/languages',
// 		license: {
// 		  key: 'mit-0',
// 		  name: 'MIT No Attribution',
// 		  node_id: 'MDc6TGljZW5zZTQx',
// 		  spdx_id: 'MIT-0',
// 		  url: 'https://api.github.com/licenses/mit-0'
// 		},
// 		master_branch: 'master',
// 		merges_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/merges',
// 		milestones_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/milestones{/number}',
// 		mirror_url: null,
// 		name: 'ds-airflow-mwaa',
// 		node_id: 'R_kgDOGRbi8w',
// 		notifications_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/notifications{?since,all,participating}',
// 		open_issues: 0,
// 		open_issues_count: 0,
// 		organization: 'bigabid',
// 		owner: {
// 		  avatar_url: 'https://avatars.githubusercontent.com/u/11740278?v=4',
// 		  email: null,
// 		  events_url: 'https://api.github.com/users/bigabid/events{/privacy}',
// 		  followers_url: 'https://api.github.com/users/bigabid/followers',
// 		  following_url: 'https://api.github.com/users/bigabid/following{/other_user}',
// 		  gists_url: 'https://api.github.com/users/bigabid/gists{/gist_id}',
// 		  gravatar_id: '',
// 		  html_url: 'https://github.com/bigabid',
// 		  id: 11740278,
// 		  login: 'bigabid',
// 		  name: 'bigabid',
// 		  node_id: 'MDEyOk9yZ2FuaXphdGlvbjExNzQwMjc4',
// 		  organizations_url: 'https://api.github.com/users/bigabid/orgs',
// 		  received_events_url: 'https://api.github.com/users/bigabid/received_events',
// 		  repos_url: 'https://api.github.com/users/bigabid/repos',
// 		  site_admin: false,
// 		  starred_url: 'https://api.github.com/users/bigabid/starred{/owner}{/repo}',
// 		  subscriptions_url: 'https://api.github.com/users/bigabid/subscriptions',
// 		  type: 'Organization',
// 		  url: 'https://api.github.com/users/bigabid'
// 		},
// 		private: true,
// 		pulls_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/pulls{/number}',
// 		pushed_at: 1635339650,
// 		releases_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/releases{/id}',
// 		size: 103,
// 		ssh_url: 'git@github.com:bigabid/ds-airflow-mwaa.git',
// 		stargazers: 0,
// 		stargazers_count: 0,
// 		stargazers_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/stargazers',
// 		statuses_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/statuses/{sha}',
// 		subscribers_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/subscribers',
// 		subscription_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/subscription',
// 		svn_url: 'https://github.com/bigabid/ds-airflow-mwaa',
// 		tags_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/tags',
// 		teams_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/teams',
// 		topics: [],
// 		trees_url: 'https://api.github.com/repos/bigabid/ds-airflow-mwaa/git/trees{/sha}',
// 		updated_at: '2021-10-27T12:55:00Z',
// 		url: 'https://github.com/bigabid/ds-airflow-mwaa',
// 		visibility: 'private',
// 		watchers: 0,
// 		watchers_count: 0
// 	  },
// 	  sender: {
// 		avatar_url: 'https://avatars.githubusercontent.com/u/87079441?v=4',
// 		events_url: 'https://api.github.com/users/rotemlevibigabid/events{/privacy}',
// 		followers_url: 'https://api.github.com/users/rotemlevibigabid/followers',
// 		following_url: 'https://api.github.com/users/rotemlevibigabid/following{/other_user}',
// 		gists_url: 'https://api.github.com/users/rotemlevibigabid/gists{/gist_id}',
// 		gravatar_id: '',
// 		html_url: 'https://github.com/rotemlevibigabid',
// 		id: 87079441,
// 		login: 'rotemlevibigabid',
// 		node_id: 'MDQ6VXNlcjg3MDc5NDQx',
// 		organizations_url: 'https://api.github.com/users/rotemlevibigabid/orgs',
// 		received_events_url: 'https://api.github.com/users/rotemlevibigabid/received_events',
// 		repos_url: 'https://api.github.com/users/rotemlevibigabid/repos',
// 		site_admin: false,
// 		starred_url: 'https://api.github.com/users/rotemlevibigabid/starred{/owner}{/repo}',
// 		subscriptions_url: 'https://api.github.com/users/rotemlevibigabid/subscriptions',
// 		type: 'User',
// 		url: 'https://api.github.com/users/rotemlevibigabid'
// 	  }
// 	},
// 	eventName: 'push',
// 	sha: '9284ddd8bcc96d14002cd521954571561da148b5',
// 	ref: 'refs/heads/master',
// 	workflow: 'CI for MWAA',
// 	action: '__bigabid_gh-action-get-changed-files',
// 	actor: 'rotemlevibigabid'
//   };
  
const context = github.context;
const repo    = context.repo;
const owner   = repo.owner;

const FILES          = new Set();
const FILES_ADDED    = new Set();
const FILES_MODIFIED = new Set();
const FILES_REMOVED  = new Set();
const FILES_RENAMED  = new Set();

//const gh   = github.getOctokit(core.getInput('token'));
const token = core.getInput('token');

const gh   = github.getOctokit(token);


const args = { owner: owner.name || owner.login, repo: repo.name };


function debug(msg, obj = null) {
	core.debug(formatLogMessage(msg, obj));
}

function fetchCommitData(commit) {
	args.ref = commit.id || commit.sha;

	debug('Calling gh.repos.getCommit() with args', args)

	return gh.repos.getCommit(args);
}

function formatLogMessage(msg, obj = null) {
	return obj ? `${msg}: ${toJSON(obj)}` : msg;
}

async function getCommits() {
	let commits;

	debug('Getting commits...');

	switch(context.eventName) {
		case 'push':
			commits = context.payload.commits;
		break;

		case 'pull_request':
			const url = context.payload.pull_request.commits_url;
			core.info(`url:${url}`)
			commits = await gh.paginate(`GET ${url}`, args);
		break;

		default:
			info('You are using this action on an event for which it has not been tested. Only the "push" and "pull_request" events are officially supported.');

			commits = [];
		break;
	}

	return commits;
}

function info(msg, obj = null) {
	core.info(formatLogMessage(msg, obj));
}

function isAdded(file) {
	return 'added' === file.status;
}

function isModified(file) {
	return 'modified' === file.status;
}

function isRemoved(file) {
	return 'removed' === file.status;
}

function isRenamed(file) {
	return 'renamed' === file.status;
}

async function outputResults() {
	debug('FILES', Array.from(FILES.values()));

	core.setOutput('all', toJSON(Array.from(FILES.values()), 0));
	core.setOutput('added', toJSON(Array.from(FILES_ADDED.values()), 0));
	core.setOutput('modified', toJSON(Array.from(FILES_MODIFIED.values()), 0));
	core.setOutput('removed', toJSON(Array.from(FILES_REMOVED.values()), 0));
	core.setOutput('renamed', toJSON(Array.from(FILES_RENAMED.values()), 0));

	fs.writeFileSync(`${process.env.HOME}/files.json`, toJSON(Array.from(FILES.values())), 'utf-8');
	fs.writeFileSync(`${process.env.HOME}/files_added.json`, toJSON(Array.from(FILES_ADDED.values())), 'utf-8');
	fs.writeFileSync(`${process.env.HOME}/files_modified.json`, toJSON(Array.from(FILES_MODIFIED.values())), 'utf-8');
	fs.writeFileSync(`${process.env.HOME}/files_removed.json`, toJSON(Array.from(FILES_REMOVED.values())), 'utf-8');
	fs.writeFileSync(`${process.env.HOME}/files_renamed.json`, toJSON(Array.from(FILES_RENAMED.values())), 'utf-8');

	// Backwards Compatability
	core.setOutput('deleted', toJSON(Array.from(FILES_REMOVED.values()), 0));
	fs.writeFileSync(`${process.env.HOME}/files_deleted.json`, toJSON(Array.from(FILES_REMOVED.values())), 'utf-8');
}

async function processCommitData(result) {
	debug('Processing API Response', result);

	if (! result || ! result.data) {
		return;
	}

	result.data.files.forEach(file => {
		(isAdded(file) || isModified(file) || isRenamed(file)) && FILES.add(file.filename);

		if (isAdded(file)) {
			FILES_ADDED.add(file.filename);
			FILES_REMOVED.delete(file.filename);

			return; // continue
		}

		if (isRemoved(file)) {
			if (! FILES_ADDED.has(file.filename)) {
				FILES_REMOVED.add(file.filename);
			}

			FILES_ADDED.delete(file.filename);
			FILES_MODIFIED.delete(file.filename);

			return; // continue;
		}

		if (isModified(file)) {
			FILES_MODIFIED.add(file.filename);

			return; // continue;
		}

		if (isRenamed(file)) {
			processRenamedFile(file.previous_filename, file.filename);
		}
	});
}

function processRenamedFile(prev_file, new_file) {
	FILES.delete(prev_file) && FILES.add(new_file);
	FILES_ADDED.delete(prev_file) && FILES_ADDED.add(new_file);
	FILES_MODIFIED.delete(prev_file) && FILES_MODIFIED.add(new_file);
	FILES_RENAMED.add(new_file);
}

function toJSON(value, pretty=true) {
	return pretty
		? JSON.stringify(value, null, 4)
		: JSON.stringify(value);
}


debug('context', context);
debug('args', args);

getCommits().then(commits => {
	// Exclude merge commits
	commits = commits.filter(c => ! c.parents || 1 === c.parents.length);

	if ('push' === context.eventName) {
		commits = commits.filter(c => c.distinct);
	}

	debug('All Commits', commits);
	const error = (err) => {		
		return core.error(err) && (process.exitCode = 1)
	};

	Promise.all(commits.map(fetchCommitData))
		.then(data => Promise.all(data.map(processCommitData)))
		.then(outputResults)
		.then(() => process.exitCode = 0)
		.catch(error);
});

