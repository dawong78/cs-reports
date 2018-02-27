<link  type="text/css" rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/themes/start/jquery-ui.css" /> 
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script> 
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.0/jquery-ui.min.js"></script> 
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/0.7.2/jquery.SPServices-0.7.2.min.js"></script> 

<script type="text/javascript" src="//www.stratusforms.com/scripts/stratus-forms-1.2.js"></script>
<script type="text/javascript" src="//www.stratusforms.com/scripts/stratus-forms-data-SPServices-1.2.js"></script>

 
<script type='text/javascript'>

	$(document).ready(function() {
	     
	     //Initialization function. Tells StratusForms which Query String Variable
	     //has the ID of the form, and the name of the list to read data from
	     $("#SFForm").StratusFormsInitialize({
	     	queryStringVar: "formID",
	     	listName: "MyList"
	     });
	     
		

	 });
	 
	function SubmitForm()
	{
		//When the form is submitted store it to the specified list
		//also pasas in the x and y offset of error messages for elements
		//this allows you to change their location in reference to the form field
		$("#SFForm").StratusFormsSubmit({
	     	listName: "MyList",
            completefunc: function(id) { 
				alert("Save was successful. ID = " + id);
				window.location = window.location.pathname + "?formID=" + id; 
			}
	     });
	}
		
</script>

<div id='SFForm'>

<style>
#myTable, #myHeaderTable{
	width:35%;
}
#myTable, #myTable td, #myTable tr, #myHeader, #myHeaderTable tr {
	border-bottom: 2px solid black;
	padding: 10px;
	font-size: 15px;
}
th{
	text-align:center;
}
#myTable td, #myTable tr, #myHeader, #myHeaderTable tr{
	text-align: center;
}
#TopTable td{
	padding-left:40px;
	padding-top:10px;
}
</style>

<!----  HTML FOR Title---------------->
<table id="TopTable">	
		<tr>
			<td id="tdTitle">Title:	
			<input id="Title" type="text" placeholder="Enter Title"/>
			</td>
			
			<td id="tdFormType">Form Type:	
			<select id="FormType"  placeholder="Please select the form type." >
				<option value="360 Review">360 Review</option>
				<option value="360 WMC Review">360 WMC Review</option>
				<option value="Annual Review">Annual Review</option>
				<option value="Aspire Enrollment">Aspire Enrollment</option>
				<option value="Contingency Plan">Contingency Plan</option>
				<option value="Furlough Plan">Furlough Plan</option>
				<option value="Furlough Report">Furlough Report</option>
				<option value="Intl Expense Report">Intl Expense Report</option>
				<option value="Ministry Description">Ministry Description</option>
				<option value="Ministry Plan">Ministry Plan</option>
				<option value="Monthly Report">Monthly Report</option>
				<option value="Personnel Request">Personnel Request</option>
				<option value="Project Proposal">Project Proposal</option>
				<option value="Quarterly Report">Quarterly Report</option>
				<option value="Team Report">Team Report</option>
				<option value=""></option>
			</select>
			
			</td>
	
		</tr> 
		<tr>
			<td id="tdReportingPeriod">Reporting Period:
			<input id="ReportingPeriod" type="text" placeholder="Enter Reporting Period."/>
			</td>
			
			<td id="tdFocusGroup">Focus/Affinity Group Name:
			<select id="Focus/AffinityGroupName" class="required" placeholder="Enter your Focus/Affinity group name." >
				<option value="Arab">Arab</option>
				<option value="Central Asia">Central Asia</option>
				<option value="East Asia">East Asia</option>
				<option value="Hindu">Hindu</option>
				<option value="North America">North America</option>
				<option value="Silk Road">Silk Road</option>
			</select>
			</td>
		</tr>	
	<!-------------------------------------------------->
</table>
<table id="myHeaderTable">
		<!----  HTML FOR Table Header---------------->
		<tr id="myHeader">
			<th>Topic</th>
			<th>Description</th>
		</tr>
</table>
<table id="myTable">
	
	<!-------------------------------------------------->
	
	
	
	<!----  HTML FOR Overall Wellbeing---------------->
	<tr></tr>
	<tr>
		<th> Overall Wellbeing </th>
	</tr>
	<tr id="myWellbeing">
		<td>1. How would you describe your overall sense of well-being at this time? 
			What has impacted or contributed to your well-being this past month?<br></td>
		<td>
			<textarea rows="10" cols="70" id="OverallWellbeing"  class="required" ></textarea>
			<br>
			
		</td>
	</tr>
	<!-------------------------------------------------->
	
	<!----  HTML FOR Personal Growth Plan---------------->
	<tr></tr>
	<tr>
		<th> Personal Growth Plan </th>
	</tr>
	<tr id="myPersonalGrowth">
		<td>2. What specific plans do you have to grow in these areas 
			during this coming month?</td>
		<td>
			<textarea rows="10" cols="70" id="PersonalGrowthPlan"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->
	
	<!----  HTML FOR Personal Highlights/Struggles---------------->
	<tr></tr>
	<tr>
		<th> Personal Highlights/Struggles </th>
	</tr>
	<tr id="myPersonalHnS">
		<td>3. What meaningful events (highlights or struggles) have occurred 
			in your personal/family life this past month? 
			What events or commitments, if any, 
			do you expect to have in your personal/family life in the upcoming months?</td>
		<td>
			<textarea rows="10" cols="70" id="PersonalHighlights/Struggles"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->
	
	<!----  HTML FOR Personal Challenges---------------->
	<tr></tr>
	<tr>
		<th> Personal Challenges </th>
	</tr>
	<tr id="myPersonalChallenges">
		<td>4. What particular challenges are you facing at 
			this time? What's being done to overcome these challenges, 
			and what still needs to be done?</td>
		<td>
			<textarea rows="10" cols="70" id="PersonalChallenges"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->
	
	<!----  HTML FOR Personal Prayer---------------->
	<tr></tr>
	<tr>
		<th> Personal Prayer </th>
	</tr>
	<tr id="myPersonalPrayer">
		<td>5. Christar encourages each of us to invest 10% of our ministry hours 
			in prayer. How has your own communication with the Father been? 
			What, if anything, needs to change to keep/make prayer a priority 
			in your life?</td>
		<td>
			<textarea rows="10" cols="70" id="PersonalPrayer"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->
	
	<!----  HTML FOR Ministry Report---------------->
	<tr></tr>
	<tr>
		<th> Ministry Report </th>
	</tr>
	<tr id="myMinistryReport">
		<td>6. What are your primary ministry tasks currently, 
			and what progress is being made on these tasks? 
			What aspects/activities from this month would you 
			consider successes and which aspects are you struggling with? 
			What input do you need to help with the aspects you 
			are struggling with?</td>
		<td>
			<textarea rows="10" cols="70" id="MinistryReport"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->
	
	<!----  HTML FOR Ministry Plan---------------->
	<tr></tr>
	<tr>
		<th> Ministry Plan </th>
	</tr>
	<tr id="myMinistryPlan">
		<td>7. What will be your priorities over the next month? 
			What, if anything, is holding you back? 
			What will you do this coming month to address it?</td>
		<td>
			<textarea rows="10" cols="70" id="MinistryPlan"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->

	<!----  HTML FOR Pre-Evangelism/Evangelism---------------->
	<tr></tr>
	<tr>
		<th> Pre-Evangelism/Evangelism </th>
	</tr>
	<tr id="myPEvan/Evan">
		<td>8. What have you seen God do through your ministry in the 
			last month in the areas of Pre-evangelism and Evangelism?</td>
		<td>
			<textarea rows="10" cols="70" id="Pre-Evangelism/Evangelism"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->

	<!----  HTML FOR Gathering/Discipleship/Leader Training---------------->
	<tr></tr>
	<tr>
		<th> Gathering/Discipleship/Leadership Training </th>
	</tr>
	<tr id="myGDLt">
		<td>9. What have you seen God do through your ministry
			in the last month in the areas of Gathering, 
			Discipleship and Leadership training?</td>
		<td>
			<textarea rows="10" cols="70" id="Gathering/Discipleship/LeaderTraining"></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->

	<!----  HTML FOR Other Responsibilities---------------->
	<tr></tr>
	<tr>
		<th> Other Responsibilities </th>
	</tr>
	<tr id="myOtherResponsibilities">
		<td>10. What have you seen God do through your ministry in the last
			month in Support Ministry or Additional Responsibilities 
			team, FG, AG, CS, business or institution, etc.)?</td>
		<td>
			<textarea rows="10" cols="70" id="OtherResponsibilities"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->
	
	<!----  HTML FOR Discipling Plan---------------->
	<tr></tr>
	<tr>
		<th> Discipling Plan </th>
	</tr>
	<tr id="myDisciplingPlan">
		<td>11. Consider your contacts and disciples. 
			What will you do during the next month to help 
			them take their next steps with Jesus?</td>
		<td>
			<textarea rows="10" cols="70" id="DisciplingPlan"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->

	<!----  HTML FOR Language/Acculturation---------------->
	<tr></tr>
	<tr>
		<th> Language/Acculturation </th>
	</tr>
	<tr id="myLanguage/Acculturation">
		<td>12. What have you done to improve your language 
			ability or cultural understanding this past month?</td>
		<td>
			<textarea rows="10" cols="70" id="Language/Acculturation"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->

	<!----  HTML FOR Professional Development---------------->
	<tr></tr>
	<tr>
		<th> Professional Development </th>
	</tr>
	<tr id="myProDev">
		<td>13. What have you done this past month to develop your 
			skill and knowledge level in your ministry role, 
			leadership, and/or other professional skills?</td>
		<td>
			<textarea rows="10" cols="70" id="ProfessionDevelopment"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->

	<!----  HTML FOR Team Direction/Fit---------------->
	<tr></tr>
	<tr>
		<th> Team Direction/Fit </th>
	</tr>
	<tr id="myTeamDirection/Fit">
		<td>14. What are your thoughts and feelings regarding 
			your team's direction and the extent to which your 
			role aligns with your best contribution? 
			What concerns or joys would you like to mention?</td>
		<td>
			<textarea rows="10" cols="70" id="TeamDirection/Fit"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->

	<!----  HTML FOR Mobilizing---------------->
	<tr></tr>
	<tr>
		<th> Mobilizing </th>
	</tr>
	<tr id="myMobilizing">
		<td>15. â€œEvery Member a Mobilizerâ€ is a call for each of us to
			take part in mobilizing new laborers to the harvest. 
			What steps, if any, have you taken to mobilize this 
			past month? What plans do you have for mobilization 
			in the coming months?</td>
		<td>
			<textarea rows="10" cols="70" id="Mobilizing"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->
	
	<!----  HTML FOR Team Dynamics---------------->
	<tr></tr>
	<tr>
		<th> Team Dynamics </th>
	</tr>
	<tr id="myTeamDynamics">
		<td>16. How would you describe your team dynamics? 
			Are there any conflicts/tensions/issues that 
			need to be addressed? In the interests of dealing 
			with issues while they are still small, 
			is your team moving towards resolution? 
			Does your team need outside assistance?</td>
		<td>
			<textarea rows="10" cols="70" id="TeamDynamics"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->

	<!----  HTML FOR Team Prayer---------------->
	<tr></tr>
	<tr>
		<th> Team Prayer </th>
	</tr>
	<tr id="myTeamPrayer">
		<td>17. Prayer is a necessary part of team life. 
			How was that expressed this last month? 
			What plans do you have for upcoming months 
			or what would you like to see?</td>
		<td>
			<textarea rows="10" cols="70" id="TeamPrayer"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->
	
	<!----  HTML FOR Supporters---------------->
	<tr></tr>
	<tr>
		<th> Supporters </th>
	</tr>
	<tr id="mySupporters">
		<td>18. Christar asks that we communicate with 
			our support team at least 6 times each year. 
			Where are you in that process?  
			What are your plans for communicating with your 
			supporters this coming month?</td>
		<td>
			<textarea rows="10" cols="70" id="Supporters"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->
	
	<!----  HTML FOR Current Support Balance---------------->
	<tr></tr>
	<tr>
		<th> Current Support Balance </th>
	</tr>
	<tr id="myCurrentSupportBalance">
		<td>19. What is your current support balance?</td>
		<td>
			<textarea rows="10" cols="70" id="CurrentSupportBalance"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->

	<!----  HTML FOR Any Other Matters?---------------->
	<tr></tr>
	<tr>
		<th> Any Other Matters? </th>
	</tr>
	<tr id="myOtherMatters">
		<td>20. What, if any, other matters you would like to discuss 
			with me?</td>
		<td>
			<textarea rows="10" cols="70" id="AnyOtherMatters?"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->

	<!----  HTML FOR Supervisor Assistance?---------------->
	<tr></tr>
	<tr>
		<th> Supervisor Assistance? </th>
	</tr>
	<tr id="mySupervisorAssistance">
		<td>21. How can I help you at this time?</td>
		<td>
			<textarea rows="10" cols="70" id="SupervisorAssistance?"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->

	<!----  HTML FOR Prayer Requests---------------->
	<tr></tr>
	<tr>
		<th> Prayer Requests </th>
	</tr>
	<tr id="myPrayerRequest">
		<td>22. How may I be interceding for you?</td>
		<td>
			<textarea rows="10" cols="70" id="PrayerRequests"   ></textarea><br>
			
		</td>
	<tr>
	<!-------------------------------------------------->
	
	<!----  HTML FOR Personnel Highlights---------------->
	<tr></tr>
	<tr>
		<th> Personnel Highlights </th>
	</tr>
	<tr id="myPersonnelHighlights">
		<td>23. List highlights from the personnel you supervise.</td>
		<td>
			<textarea rows="10" cols="70" id="PersonnelHighlights"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->
	
	
	
	<!----  HTML FOR Monthly Reports Submitted---------------->
	<tr></tr>
	<tr>
		<th> Monthly Reports Submitted </th>
	</tr>
	<tr id="myMonthlyReportsSubmitted">
		<td>24. How many of your direct reports submitted a Monthly Report
			this month?</td>
		<td>
			<textarea rows="10" cols="70" id="MonthlyReportsSubmitted"   ></textarea><br>
			
		</td>
	</tr>
	<!-------------------------------------------------->

	<!----  HTML FOR Interviews Conducted---------------->
	<tr></tr>
	<tr>
		<th> Interviews Conducted </th>
	</tr>
	<tr id="myConductedInterviews">
		<td>25. How many of your direct reports submitted a Monthly Report 
			this month?</td>
		<td>
			<textarea rows="10" cols="70" id="InterviewsConducted"   ></textarea><br>
			
		</td>
	</tr>
	
<br>
</table>
<!-------------------------------------------------->

<br><br>

<input type='button' value='Submit/Update Form' onclick='SubmitForm();'>
</div>