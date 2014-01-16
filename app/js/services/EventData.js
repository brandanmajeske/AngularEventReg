eventsApp.factory('eventData', function(){
	
	return {

		event: {
		name: 'Angular Boot Camp',
		date: 1392373800000,
		time: '10:30 am',
		location: { 
			address: 'Google Headquarters',
			city: 'Mountain View',
			state: 'CA'
		},
		price: 34,
		imageUrl: '/img/angularjs-logo.png',
		sessions: [
				{
					name: 'Directives Masterclass',
					creatorName: 'Bob Smith',
					duration: 1,
					level: 'Advanced',
					abstract: 'In this session you will learn the ins and outs of directives!',
					upVoteCount: 0			},
				{
					name: 'Scope for fun and profit',
					creatorName: 'John Doe',
					duration: 2,
					level: 'Introductory',
					abstract: 'This session will take a closer look at scopes. Learn what they do and how to use them.',
					upVoteCount: 0			},
				{
					name: 'Well Behaved Controllers',
					creatorName: 'Jane Doe',
					duration: 4,
					level: 'Intermediate',
					abstract: 'Controllers are the beginning... Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
					upVoteCount: 0
				}
			]
		}
	};
});