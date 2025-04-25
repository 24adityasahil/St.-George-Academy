
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const FeeStructure = () => {
  const grades = [
    { grade: 1, tuitionFee: 50000, labFee: 5000, libraryFee: 2000, totalFee: 57000 },
    { grade: 2, tuitionFee: 55000, labFee: 5000, libraryFee: 2000, totalFee: 62000 },
    { grade: 3, tuitionFee: 60000, labFee: 5000, libraryFee: 2000, totalFee: 67000 },
    { grade: 4, tuitionFee: 65000, labFee: 5500, libraryFee: 2500, totalFee: 73000 },
    { grade: 5, tuitionFee: 70000, labFee: 5500, libraryFee: 2500, totalFee: 78000 },
    { grade: 6, tuitionFee: 75000, labFee: 6000, libraryFee: 3000, totalFee: 84000 },
    { grade: 7, tuitionFee: 80000, labFee: 6000, libraryFee: 3000, totalFee: 89000 },
    { grade: 8, tuitionFee: 85000, labFee: 6500, libraryFee: 3500, totalFee: 95000 },
    { grade: 9, tuitionFee: 90000, labFee: 7000, libraryFee: 4000, totalFee: 101000 },
    { grade: 10, tuitionFee: 95000, labFee: 7500, libraryFee: 4500, totalFee: 107000 },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-4xl font-playfair font-bold text-school-primary mb-8 text-center">
          Fee Structure
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Grade</TableHead>
                <TableHead className="text-right">Tuition Fee</TableHead>
                <TableHead className="text-right">Lab Fee</TableHead>
                <TableHead className="text-right">Library Fee</TableHead>
                <TableHead className="text-right">Total Fee</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {grades.map((grade) => (
                <TableRow key={grade.grade}>
                  <TableCell className="font-medium">{grade.grade}</TableCell>
                  <TableCell className="text-right">₹{grade.tuitionFee}</TableCell>
                  <TableCell className="text-right">₹{grade.labFee}</TableCell>
                  <TableCell className="text-right">₹{grade.libraryFee}</TableCell>
                  <TableCell className="text-right font-medium">₹{grade.totalFee}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-playfair font-bold text-school-primary mb-4">
            Additional Information
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">One-time Fees:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Registration Fee: ₹1,000 (Non-refundable)</li>
                <li>Admission Fee: ₹10,000 (One-time payment)</li>
                <li>Security Deposit: ₹5,000 (Refundable)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Important Notes:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>All fees are to be paid quarterly</li>
                <li>Late payment will incur a penalty of ₹100 per day</li>
                <li>Fees can be paid through cash, cheque, or online transfer</li>
                <li>Sibling discount of 10% on tuition fee is available for the second child</li>
                <li>Annual payment of fees in advance will get a 5% discount on the total amount</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FeeStructure;
