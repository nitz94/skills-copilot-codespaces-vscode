function skillsMembers() {
    return {
        restrict: 'E',
        templateUrl: 'app/member/skills.html',
        scope: {
            member: '='
        },
        controller: function($scope) {
            $scope.skills = $scope.member.skills;
        }
    };
}