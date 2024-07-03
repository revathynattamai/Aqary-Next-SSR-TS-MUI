import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type Props = {
  commentsData: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
};

export default function Post({ commentsData }: Props) {
  return (
    <>
      <h2 className="card-title">Comments</h2>
      <Card
        sx={{ minWidth: 275 }}
        variant="outlined"
      >
        <CardContent>
          <Typography variant="body1">
            UserId: {commentsData.userId} <br />
            Id: {commentsData.id} <br />
            Title: {commentsData.title} <br />
            Body: {commentsData.body}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const commentsResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const commentsData = await commentsResponse.json();
  console.log(commentsData);

  return { props: { commentsData } };
}
