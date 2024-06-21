const axios = require('axios');
const cheerio = require('cheerio');


const [StudentName, setStudentName] = useState('');
const [upcomingPayment, setUpcomingPayment] = useState('');
const [numberOfActivities, setNumberOfActivities] = useState('');
const [sgpa, setSgpa] = useState('');
const [attendancePercentage, setAttendancePercentage] = useState('');
const [courseAttendance, setCourseAttendance] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://www.brainwareuniversity.ac.in/studentselfservice/index.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'student_code=BWU/BCA/23/776&password=Chaitali@1234&login=Login',
            });

            const text = await response.text();
            if (text.includes('window.location=')) {
                const scriptContent = text.split("window.location='")[1].split("'")[0];
                const fullRedirectionUrl = `https://www.brainwareuniversity.ac.in/studentselfservice/${scriptContent}`;

                const redirectionResponse = await fetch(fullRedirectionUrl);
                const targetResponse = await fetch('https://www.brainwareuniversity.ac.in/studentselfservice/student-how-to-use.php');
                const targetText = await targetResponse.text();

                // Extracting attendance percentage
                const StudentName = targetText.match(/12px;">(.*?)</);
                if (StudentName) {
                    setStudentName(StudentName[1]);
                }

                const attendancePercentageMatch = targetText.match(/<h3>(.*?)<sup/);
                if (attendancePercentageMatch) {
                    setAttendancePercentage(attendancePercentageMatch[1]);
                }
                ;

                // Extracting upcoming payment details
                const upcomingPaymentMatch = targetText.match(/<h3 class="" style="font-size:34px !important;">(.*?)<\/h3>\s*<p>(.*?)<\/p>/);
                if (upcomingPaymentMatch) {
                    setUpcomingPayment(`${upcomingPaymentMatch[1]} ${upcomingPaymentMatch[2]}`);
                }

                // Extracting number of activities
                const numberOfActivitiesMatch = targetText.match(/<h3>(.*?)<\/h3>\s*<p>(.*?)<\/p>/g);
                if (numberOfActivitiesMatch && numberOfActivitiesMatch.length > 1) {
                    const activitiesText = numberOfActivitiesMatch[1].match(/<h3>(.*?)<\/h3>\s*<p>(.*?)<\/p>/);
                    setNumberOfActivities(activitiesText[1]);
                }

                // Extracting SGPA
                const sgpaMatch = targetText.match(/<h3>(.*?)<\/h3>\s*<p>(.*?)<\/p>/g);
                if (sgpaMatch && sgpaMatch.length > 2) {
                    const sgpaText = sgpaMatch[2].match(/<h3>(.*?)<\/h3>\s*<p>(.*?)<\/p>/);
                    setSgpa(sgpaText[1]);
                }

                // Extracting course-wise attendance
                const courseAttendanceTable = targetText.match(/<table class="table">([\s\S]*?)<\/table>/g);
                if (courseAttendanceTable) {
                    const courses = [];
                    const rows = courseAttendanceTable[1].match(/<tr>[\s\S]*?<\/tr>/g);
                    rows.forEach(row => {
                        const columns = row.match(/<td>(.*?)<\/td>/g).map(col => col.replace(/<\/?td>/g, ''));
                        courses.push({
                            courseCode: columns[0],
                            courseName: columns[1],
                            attendance: columns[2],
                            percentage: columns[3],
                        });
                    });
                    setCourseAttendance(courses);
                }
            } else {
                console.log('Login failed: Incorrect login details or redirection script not found.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);