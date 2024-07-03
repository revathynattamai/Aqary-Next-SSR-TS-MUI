import Link from 'next/link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {
  postsData: [
    {
      userId: number;
      id: number;
      title: string;
      body: string;
    }
  ];
};

export default function Home({ postsData }: Props) {
  return (
    <div className="card w-3/12 border border-gray-300">
      <div className="card-body">
        <h2 className="card-title">Posts</h2>
        {postsData.map((posts: any) => {
          return (
            <Card
              sx={{ minWidth: 500 }}
              variant="outlined"
            >
              <CardContent>
                <Typography variant="body1">
                  UserId: {posts.userId} <br />
                  Id: {posts.id} <br />
                  Title: {posts.title} <br />
                  Body: {posts.body}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained">
                  <Link href={`postDetails/${encodeURIComponent(posts.id)}`}>
                    Details
                  </Link>
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const postsResponse = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const postsData = await postsResponse.json();

  return { props: { postsData } };
}
