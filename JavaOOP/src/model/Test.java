package model;

public class Test {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Student student=new Student();
		student.setName("Alan Liu");
		student.setAge("21");
		student.setSex("male");
		student.setNum("123456"); 
		System.out.println(student.getName());
		System.out.println(student.getAge());

		System.out.println(student.getSex());

		System.out.println(student.getNum());


	}

}
