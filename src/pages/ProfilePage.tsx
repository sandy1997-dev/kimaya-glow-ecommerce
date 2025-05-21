
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock user data
const mockUser = {
  id: "1",
  name: "Jane Doe",
  email: "jane.doe@example.com",
  avatarUrl: "",
};

// Mock order history data
const mockOrders = [
  { id: "ORD-001", date: "2024-05-15", status: "Delivered", total: 249.99 },
  { id: "ORD-002", date: "2024-05-01", status: "Processing", total: 129.50 },
];

const ProfilePage = () => {
  const [user, setUser] = useState(mockUser);
  const [name, setName] = useState(mockUser.name);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Simulating fetching user data from backend
  useEffect(() => {
    // In a real app, this would be an API call to Supabase to get user profile
  }, []);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call to update profile
    setTimeout(() => {
      setUser(prev => ({ ...prev, name }));
      setIsLoading(false);
      toast.success("Profile updated successfully!");
    }, 1000);
  };

  const handleLogout = () => {
    // Simulate logout
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-cormorant text-kimaya-primary mb-6">My Account</h1>
      
      <div className="grid md:grid-cols-[250px_1fr] gap-6">
        <div>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-3">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={user.avatarUrl} />
                  <AvatarFallback className="text-lg bg-kimaya-secondary text-kimaya-primary">
                    {user.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={handleLogout}
              >
                Logout
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div>
          <Tabs defaultValue="profile">
            <TabsList>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Order History</TabsTrigger>
              <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your account details</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUpdateProfile} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={user.email}
                        disabled 
                      />
                      <p className="text-xs text-muted-foreground">Email cannot be changed</p>
                    </div>
                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? 'Updating...' : 'Save Changes'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="orders" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>View your past orders</CardDescription>
                </CardHeader>
                <CardContent>
                  {mockOrders.length > 0 ? (
                    <div className="space-y-4">
                      {mockOrders.map((order) => (
                        <div key={order.id} className="p-4 border rounded-md flex justify-between items-center">
                          <div>
                            <h4 className="font-medium">{order.id}</h4>
                            <div className="text-sm text-muted-foreground">
                              {order.date} · ${order.total.toFixed(2)}
                            </div>
                          </div>
                          <div>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              order.status === 'Delivered' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      You haven't placed any orders yet.
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="wishlist" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Wishlist</CardTitle>
                  <CardDescription>Items saved for later</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    View your wishlist items from the dedicated Wishlist page.
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
